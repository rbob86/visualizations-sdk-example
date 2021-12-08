import React from 'react'
import { Query, Visualization } from '@looker/visualizations'
import sdk from '../utils/LookerSDK'

function Home(): JSX.Element {
    const queryId = 689

    return (
        <Query
            sdk={sdk}
            query={queryId}
            config={{
                legend: false,
                tooltips: false,
            }}
        >
            <Visualization></Visualization>
        </Query>
    )
}

export default Home
