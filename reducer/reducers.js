import { POSTS_TIPS,POSTS_SUCCESS,POSTS_TOPIC,POSTS_TOPIC_SUCCESS } from "../action/actionTypes";

function topics(state=[],action){
	switch(action.type){
		case POSTS_TIPS:
			//return Object.assign({},state,{tips:action.tips,isLoading:action.isLoading});
			return action.tips;
		case POSTS_SUCCESS:
		return action.tips;
		default:
			return state;
	}
}

function isLoading(state=false,action){
	switch(action.type){
		case POSTS_TIPS:
			return action.isLoading;
		case POSTS_SUCCESS:
			return action.isLoading;
		default:
			return state;
	}
}

function topic(state={},action){
	switch(action.type){
		case POSTS_TOPIC:
			return Object.assign({},state,action.topic);
		case POSTS_TOPIC_SUCCESS:
			return Object.assign({},state,action.topic);
		default:
			return state;
	}
}

export default function tipsList(state={tips:[],isLoading:false,topic:{}},action){
	return {
		tips:topics(state.tips,action),
		isLoading:isLoading(state.isLoading,action),
		topic:topic(state.topic,action)
	}
}
