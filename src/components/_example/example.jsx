import React from 'react'
import { View, Text, Button } from 'react-native'
import useFetch from 'use-http'
// https://github.com/alex-cory/use-http

const myUrl = 'https://jsonplaceholder.typicode.com/posts'
// const baseUrl = 'https://jsonplaceholder.typicode.com'
// const postBody = {
//   id: -1,
//   userId: 1,
//   title: 'post title',
//   body: 'hello world',
// }

const Example = () => {
  const [request, response] = useFetch(myUrl)
  const handleClick = () => request.get()

  const { data, loading } = useFetch(myUrl, { onMount: true })

  const reqs = {
    'useFetch, array destructuring, request.get()': {
      data: response.data,
      onClick: handleClick,
      loading: request.loading,
    },
    'useFetch, object destructuring onMount, get()': {
      data,
      loading,
    },
  }

  return (
    <View>
      {Object.entries(reqs).map(([name, { data, onClick, loading }]) => (
        <View key={name}>
          <h2>{name}</h2>
          {onClick && <Button onClick={onClick}> Click Me</Button>}
          {loading
            ? 'Loading...'
            : data && (
              <code style={{ display: 'block' }}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </code>
            )}
        </View>
      ))}
    </View>
  )
}

export default Example