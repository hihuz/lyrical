import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSong from "../queries/fetchSong";
import LyricsCreate from "./LyricsCreate";

class SongDetails extends React.Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div />;
    }

    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <ul>
          {song.lyrics.map(lyrics => <li key={lyrics.id}>{lyrics.content}</li>)}
        </ul>
        <LyricsCreate />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetails);
