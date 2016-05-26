import React, { Component,PropTypes } from "react";
import { connect } from "react-redux";
import { getAllTips,fetchTips } from "./action/actions";
import Footer from './component/footer';
import Loading from './component/loading';
import Header from './component/header';
import Topics from './component/topics';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:'首页'
		}
	}
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchTips());
	}

	_changeTabs(label,mark){
		const { dispatch } = this.props
		this.setState({title:label});
		this.context.router.push('/');
		dispatch(fetchTips(mark));
	}

	_showDetail(topicId){
		this.context.router.push('/detail/'+topicId);
	}

	render(){
		const { dispatch,tipsList,isLoading,topic } = this.props;
		return (
			<div className="aui-content">
				<Header title={this.state.title} />
				<Loading isShow={ isLoading }/>
				{/* 路由组件传递参数写法 */}
				{this.props.children && React.cloneElement(this.props.children, {
	              tipsList: tipsList,
								onShowDetail: this._showDetail.bind(this),
								dispatch:dispatch,
								topic:topic
	            })}

	      <Footer onChangeTabs={ this._changeTabs.bind(this) }/>
		  </div>
		);
	}
}


App.propTypes = {
	tipsList:PropTypes.array.isRequired,
	isLoading:PropTypes.bool.isRequired,
	topic:PropTypes.object.isRequired
}

//获得router需要设置
App.contextTypes = {
	router:React.PropTypes.object.isRequired
}

function select(state){
	return {
		tipsList:state.tips,
		isLoading:state.isLoading,
		topic:state.topic
	}
}

export default connect(select)(App)
