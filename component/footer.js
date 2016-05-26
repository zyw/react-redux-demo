import React, { Component,PropTypes } from "react";

const ALL = "all";
const GOOD = "good";
const SHARE = "share";
const ASK = "ask";
const JOB = "job";

export default class Footer extends Component {
	_changeTabsMiddle(label,mark){
		const { onChangeTabs } = this.props
		onChangeTabs(label,mark);

		//设置选中的颜色
		const objs = this.refs;
		for(var dom in objs){
			objs[dom].className="";
		}
		this.refs[mark].className="active-warning";
	}
	render(){
		return (
			<footer className="aui-nav" id="aui-footer">
			    <ul className="aui-bar-tab">
			        <li ref={ALL} className="active-warning" onClick={ () => this._changeTabsMiddle("首页",ALL) }>
			            <span className="aui-iconfont aui-icon-home"></span>
			            <p>首页</p>
			        </li>
			        <li ref={GOOD} onClick={ () => this._changeTabsMiddle("精华",GOOD) }>
			            <span className="aui-iconfont aui-icon-mark"></span>
			            <p>精华</p>
			        </li>
			        <li ref={SHARE} onClick={ () => this._changeTabsMiddle("分享",SHARE) }>
			            <span className="aui-iconfont aui-icon-like"></span>
			            <p>分享</p>
			        </li>
			        <li ref={ASK} onClick={ () => this._changeTabsMiddle("问答",ASK) }>
			            <span className="aui-iconfont aui-icon-service"></span>
			            <p>问答</p>
			        </li>
			        <li ref={JOB} onClick={ () => this._changeTabsMiddle("招聘",JOB) }>
			            <span className="aui-iconfont aui-icon-my"></span>
			            <p>招聘</p>
			        </li>
			    </ul>
			</footer>
		);
	}
}