import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { push } from 'react-router-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import * as pages from './pages';
import AppMenuBtn from 'components/AppMenuBtn';
import { PrivateRoute } from './components';
import { setWindowWidth, openDrawer, closeDrawer } from 'actions/window';
import { logOff } from 'actions/auth/login';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.checkWindowWidth = this.checkWindowWidth.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  componentDidMount() {
    this.checkWindowWidth();
    window.addEventListener('resize', () => this.checkWindowWidth());
  }

  checkWindowWidth() {
    const { setWindowWidth, closeDrawer, openDrawer } = this.props;
    const windowWidth = window.innerWidth;

    setWindowWidth(windowWidth);
    if (windowWidth < 780) closeDrawer();
    else openDrawer()
  }

  handleUser() {
    const { isLoggedIn, logOut, toLogInPage } = this.props;
    isLoggedIn ? logOut() : toLogInPage() ;
  }

  render() {
    const { props: { openDrawer, isLoggedIn }, handleUser } = this;
    const barRightBtnLabel = isLoggedIn ? 'Log out' : 'Log in';

    return (
      <div>
        <AppBar
          title="Grocery App"
          iconElementRight={<FlatButton onClick={handleUser} label={barRightBtnLabel} />}
          iconElementLeft={
            <AppMenuBtn
              btn={<MenuIcon />}
              onClick={openDrawer}
            />
          }
        />
        <Route exact path="/" component={pages.Home} />
        <Route path="/login" component={pages.Login} />
        <Route path="/register" component={pages.Register} />
        <PrivateRoute exact path="/grocerylist" component={pages.Groceries} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.get('username')
});

const mapDispatchToProps = dispatch => ({
  setWindowWidth: width => dispatch(setWindowWidth(width)),
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
  toLogInPage: () => dispatch(push('/login')),
  logOut: () => dispatch(logOff())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
