import React from 'react';
import LocationRouter from '../Location/Location';

export const Person = ({ match }) => (
    <div>
        <LocationRouter />
        <h1>Person</h1>
        {
            match.params.name
        }

    </div>
)
