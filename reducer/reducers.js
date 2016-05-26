import { POSTS_TIPS,POSTS_SUCCESS } from "../action/actionTypes";

export default function tipsList(state={tips:[],isLoading:false},action){
	switch(action.type){
		case POSTS_TIPS:
			return Object.assign({},state,{tips:action.tips,isLoading:action.isLoading});
		case POSTS_SUCCESS:
			return Object.assign({},state,{tips:action.tips,isLoading:action.isLoading});
		default:
			return state;
	}
}