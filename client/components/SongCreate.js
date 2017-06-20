import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, hashHistory } from "react-router";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
    this.updateTitle = this.updateTitle.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title
        }
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.submitForm}>
          <label>Song Title:</label>
          <input value={this.state.title} onChange={this.updateTitle} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
