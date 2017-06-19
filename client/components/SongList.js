import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongList extends React.Component {
  renderSongs() {
    return this.props.data.songs.map(song =>
      <li key={song.id} className="collection-item">{song.title}</li>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <div>FETCHING DATA DUDE...</div>;
    }
    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
