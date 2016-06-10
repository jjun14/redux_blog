import React from 'react';
import Post from './Post';

class Single extends React.Component {
  render(){
    const { postId } = this.props.params;
    const { posts } = this.props;
    const index = posts.findIndex((post) => post.id === postId)
    const post = posts[index];
    return (
      <div>
        <Post post={post} />
      </div>
    )
  }
}

export default Single;
