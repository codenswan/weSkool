import React, { Component } from 'react';

import LoginButton from '../../../components/LoginButton/LoginButton';
import LogoutButton from '../../../components/LogoutButton/LogoutButton';

class Header extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <div>
        this will be the header
      </div>
    );
  }
}

export default Header;
