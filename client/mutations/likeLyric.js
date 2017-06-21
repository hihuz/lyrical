import gql from "graphql-tag";

const likeLyric = gql`
  mutation LikeLyricToSong($id: ID) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

export default likeLyric;
