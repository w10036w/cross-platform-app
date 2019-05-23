import React from 'react'
import { View, Text, Button } from 'react-native'
import useFetch from 'use-http'
// https://github.com/alex-cory/use-http

const url = 'https://jsonplaceholder.typicode.com/posts'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const postBody = {
  id: -1,
  userId: 1,
  title: 'post title',
  body: 'hello world',
}
const onMountOpts = {
  onMount: true,
}
const onEventOpts = {
  baseUrl,
  headers: {
    'Authorization': '',
    'Authorization-Token': '',
  },
}
function addTodo(entity) {
  entity.post('/posts', postBody)
}

const List = ({ data, loading }) => {
  let d = []
  if (data) {
    if (Array.isArray(data)) d = data
    else d = [data]
  }
  return (
    <View>
      {d.map(e => (
        <View key={e.title}>
          <Text>id: {e.id}</Text>
          <Text>title: {e.title}</Text>
          <Text>body: {e.body}</Text>
        </View>
      ))}
      {loading && 'Loading...'}
    </View>
  )
}

const NewTodoDisplay = ({ data, loading, error }) => (
  <View>
    {loading && <Text>Loading</Text>}
    {error && <Text>Error!</Text>}
    {data && <Text>{JSON.stringify(data)}</Text>}
  </View>
)

const Example = () => {
  const todos = useFetch(url, onMountOpts)
  const newTodo = useFetch(onEventOpts)

  return (
    <View>
      <Button onPress={() => addTodo(newTodo)} title="Add Todo" />
      <Text>New Post area</Text>
      <NewTodoDisplay {...newTodo} />
      <Text>error: {todos.error || 'no error'}</Text>
      <List data={todos.data} />
    </View>
  )
}

export default Example