import React from 'react';
import { withRouter } from 'react-router'

class LocationRouter extends React.Component {

    render() {
        const { match, location, history } = this.props
        console.log('Match: ', match);
        console.log('Location: ', location);
        console.log('History: ', history);
        return (
            <div>
                <h3>Your current path:    {match.path}  </h3>
                <h3>Your current location:   {location.pathname}</h3>
            </div>
        )

    }
}

export default LocationRouter = withRouter(LocationRouter);