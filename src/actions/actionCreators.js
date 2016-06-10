export function createPost(title, content, code, id){
  return {
    type: "CREATE_POST",
    title,
    content,
    code,
    id
  }
}

export function deletePost(i){
  return {
    type: "DELETE_POST",
    i
  }
}

export function editPost(i, title, content){
  console.log('hit the action');
  return {
    type: "EDIT_POST",
    i,
    title,
    content
  }
}
