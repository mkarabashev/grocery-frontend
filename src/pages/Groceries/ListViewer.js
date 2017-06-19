import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Delete from 'material-ui/svg-icons/action/delete' ;

import { removeListIfNeeded } from 'actions/lists/removeList';
import { getListIfNeeded } from 'actions/lists/getList';

const ListViewer = ({ lists, removeList, showList }) => {
  const listNames = lists.map(list => {
    const _id = list.get('_id');
    const name = list.get('name');

    return (
      <ListItem
        key={_id}
        primaryText={<div
          className="list-viewer__label"
          onClick={() => showList(_id)}
          children={[name]}
        />}
        rightIcon={<Delete onClick={() => removeList(_id)} />}
      />
    );
  })

  return (
    <div className="list-viewer">
      <List className="lists">
        <Subheader>Available Lists:</Subheader>
        {listNames}
      </List>
    </div>
)};

const mapStateToProps = state => ({
  lists: state.groceries.toArray()
});

const mapDispatchToProps = dispatch => ({
  removeList: listId => dispatch(removeListIfNeeded(listId)),
  showList: listId => dispatch(getListIfNeeded(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListViewer);
