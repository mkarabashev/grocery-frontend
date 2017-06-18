import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';

import ListForm from './ListForm';
import ListViewer from './ListViewer';

const  Groceries = () => (
  <section>
    <ListForm />
    <ListViewer className="list-viewer" />
  </section>
);

const mapStateToProps = state => ({
  lists: state.groceries.toArray()
})

export default Groceries;
