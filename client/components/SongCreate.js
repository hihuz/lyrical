import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form>
          <label>Song Title:</label>
          <input value={this.state.title} onChange={this.updateTitle} />
        </form>
      </div>
    );
  }
}

export default SongCreate;
