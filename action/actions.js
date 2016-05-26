import {POSTS_TIPS,POSTS_SUCCESS,POSTS_TOPIC,POSTS_TOPIC_SUCCESS} from './actionTypes';
import fetch from 'isomorphic-fetch'

function getAllTips(){
	return {
		type: POSTS_TIPS,
		tips:[],
		isLoading:true
	}
}

function getTipsSuccess(tipsList){
	return {
		type: POSTS_SUCCESS,
		tips:tipsList,
		isLoading:false
	}
}

export function fetchTips(tab="all"){
	return function(dispache){
		dispache(getAllTips());
		return fetch("https://cnodejs.org/api/v1/topics?mdrender=false&tab="+tab)
					 .then(response => response.json())
					 .then(json => dispache(getTipsSuccess(json.data)));
	}
}

function getTopicById(){
	return {
		type:POSTS_TOPIC,
		topic:{},
		isLoading:true
	}
}
function getTopicByIdSuccess(topic){
	return {
		type:POSTS_TOPIC_SUCCESS,
		topic:topic,
		isLoading:false
	}
}

export function fetchTopic(topicId){
	return function(dispache){
		dispache(getTopicById());
		return fetch("https://cnodejs.org/api/v1/topic/"+topicId)
					 .then(response => response.json())
					 .then(json => dispache(getTopicByIdSuccess(json.data)));
	}
}
