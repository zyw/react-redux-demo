import React, { Component,PropTypes } from "react";

export default class Header extends Component {
  render(){
    const { title } = this.props
    return (
      <header className="aui-bar aui-bar-nav aui-bar-dark fixed">{ title }</header>
    );
  }
}

Header.propTypes = {
  title:PropTypes.string.isRequired
}
