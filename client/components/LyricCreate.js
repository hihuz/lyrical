import React from "react";
import { graphql } from "react-apollo";
import addLyric from "../mutations/addLyric";

class LyricCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };
    this.updateContent = this.updateContent.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateContent(e) {
    this.setState({ content: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      })
      .then(() => this.setState({ content: "" }));
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>Add a Lyric</label>
        <input onChange={this.updateContent} value={this.state.content} />
      </form>
    );
  }
}

export default graphql(addLyric)(LyricCreate);
