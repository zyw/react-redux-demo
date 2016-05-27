import React, { Component,PropTypes } from "react";
import classNames from "classnames";

export default class Header extends Component {
  render(){
    const { title,onBack,isShow } = this.props
    const classes = classNames("aui-pull-left",{ hide:!isShow });
    return (
      <header className="aui-bar aui-bar-nav aui-bar-dark fixed">
        <a className={ classes } onClick={() => onBack()}>
          <span className="aui-iconfont aui-icon-left"></span>
        </a>
        <div className="aui-title">{ title }</div>
      </header>
    );
  }
}

Header.propTypes = {
  title:PropTypes.string.isRequired
}
