import React from 'react'
import Stack from './Components/StackNavigation'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://ec2-13-125-69-81.ap-northeast-2.compute.amazonaws.com:8080/graphql'
})

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Stack />
      </ApolloProvider>
    )
  }
}
