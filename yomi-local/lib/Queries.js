export const TOUNREYBYCOUNTRY_QUERY = `query TournamentsByCountry($cCode: String!, $perPage: Int!) {
    tournaments(query: {
      perPage: $perPage
      filter: {
          countryCode: $cCode,
        videogameIds: [
          1
        ]
      }
    }) {
      nodes {
        id
        name
        countryCode
        slug
        startAt
        endAt
        registrationClosesAt
        url
        owner {
          player {
            gamerTag
            id
          }
          id
        }
      }
    }
  }`
  export const TOUNREYBYCOUNTRY_VARS = `{
    "cCode": "DE",
    "perPage": 10
  }`;
