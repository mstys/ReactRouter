import React from 'react';
import { Redirect } from 'react-router-dom';


export const ProtectedRoute = (props) => (

    <div>
        <h1>Protected Route</h1>
        {
            props.staticContext
        }
        {
            props.protected ?
                (
                    <Redirect to={{
                        pathname: '/login'
                    }} />
                ) : (
                    <div><h2>Valid auth. Secure route content</h2></div>
                )
        }
    </div>
)
