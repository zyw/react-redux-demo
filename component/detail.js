import React,{ Component,PropTypes } from "react"
import { fetchTopic } from "../action/actions"

export default class Detail extends Component {

  componentDidMount(){
		const { topicId } = this.props.params
    const { dispatch } = this.props
		dispatch(fetchTopic(topicId));
	}
  render(){
    const { topic } = this.props
    return (
      <div className="aui-content content">
        <h1>{topic.title}</h1>
        <p><div dangerouslySetInnerHTML={{__html: topic.content}}></div></p>
      </div>
    );
  }
}
