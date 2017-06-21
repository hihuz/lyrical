import gql from "graphql-tag";

const fetchSongs = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
      }
    }
  }
`;

export default fetchSongs;
