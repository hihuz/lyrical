import React from "react";
import { graphql } from "react-apollo";
import likeLyric from "../mutations/likeLyric";

class LyricList extends React.Component {
  constructor(props) {
    super(props);

    this.likeLyric = this.likeLyric.bind(this);
  }

  likeLyric(id) {
    this.props.mutate({ variables: { id } });
  }

  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ id, content, likes }) =>
          <li key={id} className="collection-item">
            {content}
            <div className="likes">
              <i className="material-icons" onClick={() => this.likeLyric(id)}>thumb_up</i>
              {likes}
            </div>
          </li>
        )}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);
