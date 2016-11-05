import React from 'react';
import Comment from "./Comment";

export default class CommentList extends React.Component {
  render () {
    return (
      <div className="CommentList">
        <h2>{this.props.title}</h2>
        <Comment author="水野 竜与志" text="たまご！"></Comment>
      </div>
    );
  }
}
