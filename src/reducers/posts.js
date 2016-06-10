function posts(state = [], action){
  console.log('in the posts reducer')
  switch (action.type) {
    case 'CREATE_POST':
      console.log('creating a new post');
      console.log(action);
      return [
        ...state,
        {
            title: action.title,
            content: action.content,
            code: action.code,
            id: action.id
        }
      ]
    case "DELETE_POST":
      console.log(`deleting post with index ${action.i}`);
      var i = action.i;
      return [
        ...state.slice(0, i),
        ...state.slice(i+1)
      ]
    case "EDIT_POST":
      console.log('editing in the reducer');
      var i = action.i;
      console.log(action);
      return [
        ...state.slice(0, i),
        {...state[i], title: action.title, content: action.content},
        ...state.slice(i+1),
      ]
    default:
      return state;
  }
}

export default posts
