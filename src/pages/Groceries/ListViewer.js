import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete' ;

import { removeListIfNeeded } from 'actions/lists/removeList';

const  ListViewer = ({ lists, removeList }) => {
  const listNames = lists.map(list => {
    const _id = list.get('_id');
    const name = list.get('name');

    return (
      <ListItem
        key={_id}
        primaryText={name}
        onClick={() => console.log('show')}
        rightIcon={
          <Delete onClick={() => removeList(_id)} />
        }
      />
    );
  })

  return (
    <div className="list-viewer">
      <List className="lists">
        {listNames}
      </List>
    </div>
)};

const mapStateToProps = state => ({
  lists: state.groceries.toArray()
});

const mapDispatchToProps = dispatch => ({
  removeList: listId => dispatch(removeListIfNeeded(listId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListViewer);
