import { useState } from 'react'
import { createContainer } from 'unstated-next'
import { graphql } from 'react-relay'

function useQuery() {
  let data
  let loading
  let error
  let refetch
  let setVariables

  // const [state, setstate] = useState({})

  return { data, loading, error, refetch, setVariables }
}

export default createContainer(useQuery)


