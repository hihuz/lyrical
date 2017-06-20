import gql from "graphql-tag";

const addSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default addSong;
