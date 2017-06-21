import gql from "graphql-tag";

const likeLyric = gql`
<<<<<<< HEAD
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
=======
  mutation LikeLyricToSong($id: ID) {
    likeLyric(id: $id) {
      id
      content
>>>>>>> 6210c377d0df985cf9d73863eb173d9bf0349afe
      likes
    }
  }
`;

export default likeLyric;
