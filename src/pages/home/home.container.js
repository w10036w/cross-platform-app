import gql from 'graphql-tag.macro'

const query = gql`
query homePageQuery {
  todo(id:1) {
    id
    title
  }
}
`
