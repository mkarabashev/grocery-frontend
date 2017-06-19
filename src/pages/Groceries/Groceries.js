import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';

import ListForm from './ListForm';
import ListViewer from './ListViewer';
import ItemViewer from './ItemViewer';

class Groceries extends Component {
  render() {
    return (
      <section>
        <Drawer containerStyle={{width: 330}} open>
          <ListForm />
          <ListViewer />
        </Drawer>
        <ItemViewer />
      </section>
    );
  }
}

export default Groceries;
