import React from 'react';
import { Link } from 'react-router';

export default class BlogContainer extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <Link to="/">
          <h1>Jimmy's Blog</h1>
        </Link>
        <Link to="/posts/new">
            <button>Create a Post</button>
        </Link>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
