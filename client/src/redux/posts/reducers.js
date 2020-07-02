import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "./actions";

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
