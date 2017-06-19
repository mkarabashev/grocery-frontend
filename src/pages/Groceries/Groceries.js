import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/navigation/close';

import ListForm from './ListForm';
import ListViewer from './ListViewer';
import ItemViewer from './ItemViewer';
import AppMenuBtn from 'components/AppMenuBtn';
import { closeDrawer } from 'actions/window';

const Groceries = ({ closeDrawer, drawer }) => {
  const shouldOpen = drawer;
  const containerStyle = {
    width: 330,
    display: shouldOpen ? 'block' : 'none'
  }

  return (
    <section>
      <Drawer containerStyle={containerStyle} open={shouldOpen}>
        <AppBar
          title="Grocery App"
          iconElementLeft={
            <AppMenuBtn
              btn={<Close />}
              onClick={closeDrawer}
            />
          }
        />
        <ListForm />
        <ListViewer />
      </Drawer>
      <ItemViewer />
    </section>
  );
};

const mapStateToProps = state => ({
  drawer: state.current.get('drawer')
});

const mapDispatchToProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groceries);
