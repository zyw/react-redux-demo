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
		console.log(label + "--" + mark);
		this.setState({title:label});
		dispatch(fetchTips(mark));
	}

	render(){
		const { dispatch,tipsList,isLoading } = this.props;
		return (
			<div className="aui-content">
				<Header title={this.state.title} />
				<Loading isShow={ isLoading }/>
				<Topics tipsList={ tipsList }/>
	      <Footer onChangeTabs={ this._changeTabs.bind(this) }/>
		  </div>
		);
	}
}

App.propTypes = {
	tipsList:PropTypes.array.isRequired,
	isLoading:PropTypes.bool.isRequired
}

function select(state){
	return {
		tipsList:state.tips,
		isLoading:state.isLoading
	}
}

export default connect(select)(App)
