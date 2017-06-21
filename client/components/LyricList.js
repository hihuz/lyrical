import React from "react";
import { graphql } from "react-apollo";
import likeLyric from "../mutations/likeLyric";

class LyricList extends React.Component {
  constructor(props) {
    super(props);

    this.likeLyric = this.likeLyric.bind(this);
  }

  likeLyric(id) {
<<<<<<< HEAD
    this.props.mutate({ variables: { id } });
=======
    console.log(id);
    // this.props
    //   .mutate({
    //     variables: { id }
    //   })
>>>>>>> 6210c377d0df985cf9d73863eb173d9bf0349afe
  }

  render() {
    return (
      <ul className="collection">
<<<<<<< HEAD
        {this.props.lyrics.map(({ id, content, likes }) =>
          <li key={id} className="collection-item">
            {content}
            <div className="likes">
              <i className="material-icons" onClick={() => this.likeLyric(id)}>thumb_up</i>
              {likes}
            </div>
=======
        {this.props.lyrics.map(({ id, content }) =>
          <li key={id} className="collection-item">
            {content}
            <i className="material-icons" onClick={() => this.likeLyric(id)}>thumb_up</i>
>>>>>>> 6210c377d0df985cf9d73863eb173d9bf0349afe
          </li>
        )}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);
