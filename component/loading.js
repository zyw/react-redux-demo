import React , { Component } from "react";
import classNames from "classnames";

export default class Loading extends Component {
	render(){
		const { isShow } = this.props
		const classes = classNames("aui-loading",{ hideLoading:!isShow });
		return (
			<div className={ classes }>
				<div className="aui-loading-1"></div>
				<div className="aui-loading-2"></div>
			</div>
		);
	}
}