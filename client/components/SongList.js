import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../mutations/deleteSong";

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteSong = this.deleteSong.bind(this);
  }

  deleteSong(id) {
    this.props.mutate({
      variables: {
        id
      },
      refetchQueries: [{ query: fetchSongs }]
    });
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) =>
      <li key={id} className="collection-item">
        {title}
        <i className="material-icons" onClick={() => this.deleteSong(id)}>delete</i>
      </li>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <div>FETCHING DATA DUDE...</div>;
    }
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
