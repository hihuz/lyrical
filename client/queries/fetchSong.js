import gql from "graphql-tag";

const fetchSongs = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default fetchSongs;
