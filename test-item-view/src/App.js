import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { HashRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ItemReviewsView from './ItemReviewsView'
import DetailReviews from './DetailReviews'


const client = new ApolloClient({
  uri: 'http://ec2-13-125-69-81.ap-northeast-2.compute.amazonaws.com:4000/'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route exact path={'/'} component={ItemReviewsView} />
            <Route path={'/detailReviews/:itemId'} component={DetailReviews} />
          </main>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
