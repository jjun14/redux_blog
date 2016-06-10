import React from 'react';
import Post from './Post';
import { Link } from 'react-router'
import autobind from 'autobind-decorator';

class BlogList extends React.Component {

  @autobind
  deletePost(index){
    console.log('deleting post: ', index);
    this.props.deletePost(index);
  }

  render(){
    return (
      <div>
        <h2>All Posts</h2>
        {this.props.posts.map((post, i) => {
        return (
          <div key={post.id}>
            <Post key={post.id} i={i} post={post} />
            <Link to={`/posts/${post.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={this.deletePost.bind(null, i)}>&times;</button>
          </div>
        )
        })}
      </div>
    )
  }
}

export default BlogList;
