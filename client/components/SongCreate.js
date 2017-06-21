import React from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import addSong from "../mutations/addSong";

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
    // check why i need to refetch here
    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: fetchSongs }]
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div className="container">
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

export default graphql(addSong)(SongCreate);
