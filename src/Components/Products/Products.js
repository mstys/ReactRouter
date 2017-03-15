import React from 'react';
import ProductDetails from '../ProductsDetails/ProductsDetails';


export const Products = ({ match }) => (
    <div>
        <h1>Products</h1>
        {
            match.params.id ?
                (
                    <ProductDetails {...match.params.id} />
                ) : null
        }

    </div>
)
