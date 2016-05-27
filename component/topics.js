import React , { Component, PropTypes } from "react";
import TopicItem from "./TopicItem"

export default class Topics extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { tipsList,onShowDetail } = this.props;
    const tipsLi = tipsList.map((tip)=>{
			return (<TopicItem key={tip.id} topic={ tip } onShowDetail={ onShowDetail } />);
		});
    return (
      <div className="aui-content content">
        <ul className="aui-list-view">
          {tipsLi}
        </ul>
      </div>
    );
  }
}
