import React from 'react';

export default class CommentList extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     showText: true
   };

   setInterval(() => {
    this.setState({
      showText: !this.state.showText
    });
   }, 1000);
  }

  render () {
    var text = this.state.showText? this.props.text : "";
    return (
      <div className="CommentList">
        <h3>{this.props.author}</h3>
        <p>{text}</p>
      </div>
    );
  }
}
