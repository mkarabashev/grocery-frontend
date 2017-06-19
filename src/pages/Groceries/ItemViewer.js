import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import RaisedButton from 'material-ui/RaisedButton';

import ListTitle from './ListTitle';
import { editNameIfNeeded } from 'actions/lists/changeName';

class ItemViewer extends Component {
  constructor(props) {
    super(props);
    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      dialog: false
    };
  }

  handleEditBtn() {
    this.setState({
      dialog: true
    });
  }

  handleClose() {
    this.setState({
      dialog: false
    });
  }

  render() {
    const {
      props: { changeListName, listName, listId, items, complete },
      state: { dialog },
      handleEditBtn,
      handleClose
    } = this;

    const itemList = items.map(item => {
      const _id = item.get('_id');
      const name = item.get('name');
      const notes = item.get('notes');

      return (
        <ListItem
          key={_id}
          primaryText={<div
            className="item-viewer__label"
            onClick={() => complete(_id)}
            children={[name]}
          />}
          rightIcon={<ModeEdit onClick={handleEditBtn} />}
        />
      );
    });

    return (
      <div className="list-viewer">
        <ListTitle
          changeTitle={changeListName}
          listName={listName}
          listId={listId}
        />
        <List className="lists">
          {itemList}
          <Dialog open={dialog} onRequestClose={handleClose}>
            editing
          </Dialog>
        </List>
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
    listId: currentListId,
    listName: currentList.get('name'),
    items: currentList.get('items').toArray()
  }
};

const mapDispatchToProps = dispatch => ({
  complete: itemId => dispatch(),
  editItem: newData => dispatch(),
  changeListName: listData => dispatch(editNameIfNeeded(listData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemViewer);
