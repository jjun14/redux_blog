import React from 'react';
import autobind from "autobind-decorator";

class EditPostForm extends React.Component {

  @autobind
  editPost(e, i){
    e.preventDefault();
    console.log("editing post", i);
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    this.props.editPost(i, title, content);
  }

  render(){
    const { postId } = this.props.params;
    const { posts } = this.props;
    const i = posts.findIndex((post) => post.id === postId)
    const post = posts[i];
    return (
      <div>
        <h2>Edit Post</h2>
        <form ref="editPostForm" onSubmit={(e) => this.editPost(e, i)}>
          <label for="title">
            Title
            <input type="text" ref="title" name='title' defaultValue={post.title} />
          </label><br />
          <label for="content">
            Content
            <textarea type="text" ref="content" name='content' defaultValue={post.content} />
          </label>
          <button type="submit">Edit Post</button>
        </form>
      </div>
    )
  }
}

export default EditPostForm;
