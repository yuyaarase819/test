import React from 'react';
import CommentList from "./CommentList";

export default class CommentBox extends React.Component {
  render () {
    return (
      <div className="CommentBox">
        <CommentList title="好きなおでんの具"></CommentList>
      </div>
    );
  }
}
