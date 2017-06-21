import React from "react";
import { graphql } from "react-apollo";
import likeLyric from "../mutations/likeLyric";

class LyricList extends React.Component {
  constructor(props) {
    super(props);

    this.likeLyric = this.likeLyric.bind(this);
  }

  likeLyric(id) {
    console.log(id);
    // this.props
    //   .mutate({
    //     variables: { id }
    //   })
  }

  render() {
    return (
      <ul className="collection">
        {this.props.lyrics.map(({ id, content }) =>
          <li key={id} className="collection-item">
            {content}
            <i className="material-icons" onClick={() => this.likeLyric(id)}>thumb_up</i>
          </li>
        )}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);
