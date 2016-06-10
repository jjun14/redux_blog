import React from 'react';
import autobind from 'autobind-decorator'

class CreatePostForm extends React.Component {
  constructor(){
    super()
  }
  
  @autobind
  handleSubmit(e){
    e.preventDefault();
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const code = Math.random().toString(36).slice(7)
    const id = Math.random().toString(36).slice(20)
    this.props.createPost(title, content, code, id)
    this.refs.createPostForm.reset();
  }

  render(){
    return (
      <div>
        <h1>Create a New Post</h1>
        <form ref="createPostForm" onSubmit={this.handleSubmit}>
          <label for="title">
            Title
            <input type="text" ref="title" name='title' />
          </label><br />
          <label for="content">
            Content
            <textarea type="text" ref="content" name='content'></textarea>
          </label>
          <button type="submit">Create Post</button>
        </form>
      </div>
    )
  }
}

export default CreatePostForm
