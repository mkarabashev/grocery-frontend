import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import ListTitle from './ListTitle';
import AddDialog from './AddDialog';
import SwitchControl from 'containers/SwitchControl';
import { editNameIfNeeded } from 'actions/lists/changeName';
import { addItemIfNeeded } from 'actions/items/addItem';
import { CompleteItemIfNeeded } from 'actions/items/completeItem';

class ItemViewer extends Component {
  constructor(props) {
    super(props);
    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.handleNewBtn = this.handleNewBtn.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);

    this.state = {
      editDialog: false,
      newItemDialog: false,
      isCompleted: false
    };
  }

  handleEditBtn() {
    this.setState({
      editDialog: true
    });
  }

  handleNewBtn() {
    this.setState({
      newItemDialog: true
    });
  }

  handleClose() {
    this.setState({
      editDialog: false,
      newItemDialog: false
    });
  }

  handleSwitch(type) {
    this.setState({
      isCompleted: type === 'purchased'
    });
  }

  render() {
    const {
      props: { createItem, changeListName, listName, items, complete, drawer },
      state: { editDialog, newItemDialog, isCompleted },
      handleEditBtn,
      handleNewBtn,
      handleClose,
      handleSwitch
    } = this;

    const itemList = items
      .filter(item => item.get('completed') === isCompleted)
      .map(item => {
        const _id = item.get('_id');
        const name = item.get('name');
        const notes = item.get('notes');
        const completed = item.get('completed');

        return (
          <ListItem
            key={_id}
            primaryText={<div
              className="item-viewer__label"
              children={[name]}
              onClick={() => complete({
                itemId: _id,
                completed: !completed
              })}
            />}
            secondaryText={notes && <div
              className="item-viewer__label"
              style={{padding: "10px 0 0 20px"}}
              children={[notes]}
              onClick={() => complete({
                itemId: _id,
                completed: !completed
              })}
            />}
            rightIcon={<ModeEdit onClick={handleEditBtn} />}
          />
        );
      });

    const noDrawerStyle = { marginLeft: 0 };

    return (
      <div style={drawer ? {} : noDrawerStyle} className="item-viewer">
        <ListTitle
          changeTitle={changeListName}
          listName={listName}
        />
        <RaisedButton
          className="item-viewer__addbtn"
          onClick={handleNewBtn}
          label="Add Item"
          primary
        />
        <List className="lists">
          <Subheader className="lists__switch">
            <SwitchControl
              menuItems={[ 'pending', 'purchased' ]}
              callback={handleSwitch}
            />
          </Subheader>
          {itemList}
        </List>
        <Dialog open={editDialog} onRequestClose={handleClose}>
          editing
        </Dialog>
        <AddDialog
          shouldOpen={newItemDialog}
          handleClose={handleClose}
          createItem={createItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const currentListId = state.current.get('current');
  const currentList = state.groceries.get(currentListId);

  if (!currentList) return {
    listName: null,
    items: []
  }

  return {
    listName: currentList.get('name'),
    items: currentList.get('items').toArray(),
    drawer: state.current.get('drawer')
  }
};

const mapDispatchToProps = dispatch => ({
  complete: itemData => dispatch(CompleteItemIfNeeded(itemData)),
  createItem: newItem => dispatch(addItemIfNeeded(newItem)),
  changeListName: newName => dispatch(editNameIfNeeded(newName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemViewer);
