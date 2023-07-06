
import PostProps from '../interfaces/postInterface'

  type Action = {
    type: string;
    payload: PostProps;
  };
  
  const initialPostState: PostProps[] = []

const postReducer = (state: PostProps[] = initialPostState, action: Action):PostProps[] => {
    switch(action.type){
        case "ADD_POST":
            return [action.payload, ...state];
            default: 
            return state;
    }
}

export default postReducer