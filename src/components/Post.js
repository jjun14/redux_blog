import React from 'react';
import { Link } from 'react-router'

class Post extends React.Component {

  render(){
    const { i, post } = this.props;
    return (
      <div>
        <Link to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post
