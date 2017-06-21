import React from "react";

class LyricList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.lyrics.map(lyric => <li key={lyric.id}>{lyric.content}</li>)}
      </ul>
    );
  }
}

export default LyricList;
