import {POSTS_TIPS,POSTS_SUCCESS} from './actionTypes';
import fetch from 'isomorphic-fetch'

export function getAllTips(){
	return {
		type: POSTS_TIPS,
		tips:[],
		isLoading:true
	}
}

export function getTipsSuccess(tipsList){
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
