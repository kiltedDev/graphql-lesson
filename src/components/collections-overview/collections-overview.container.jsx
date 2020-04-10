import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const CollectionsOverviewContainer = () => (
  <Query query={ GET_COLLECTIONS }>
  {
    ({ loading, error, data }) => {
      console.log('loading: ', loading);
      console.log('error: ', error);
      console.log('data: ', data);
      if ( loading ) return <Spinner />
      if ( error ) return <p>{ error.message }</p>
      return <CollectionsOverview collections={ data.collections } />
    }
  }
  </Query>
)

export default CollectionsOverviewContainer
