import React, { Component, PropTypes } from "react";

export default class TopicItem extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { topic,onShowDetail } = this.props
    return (
      <li className="aui-list-view-cell aui-img" onClick={ () => onShowDetail(topic.id) }>
          <img className="aui-img-object aui-pull-right" src={topic.author.avatar_url}/>
          <div className="aui-img-body">
              {topic.title}
              <p className='aui-ellipsis-2'>{topic.content}</p>
          </div>
      </li>
    );
  }
}

TopicItem.propTypes = {
  topic:PropTypes.object.isRequired
}
