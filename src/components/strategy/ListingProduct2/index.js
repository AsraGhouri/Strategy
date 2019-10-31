import React from 'react';
import CardHeader from '../ListingProduct2/Card/CardHeader'
import CardItemRelevent from '../ListingProduct2/Card/CardItemRelevent'
import CardBody from '../ListingProduct2/Card/CardBody'
const ListingProduct2 = () => {
    return (
        <div>
            <div className="a07listing1product1textlabelhorizontal2">
                <div className="background">
                </div>
                <div className="group">
                    <div className="mask">
                    </div>
                    <CardItemRelevent />
                  <CardBody />
                  <CardHeader />
                </div>
            </div>
        </div>
    );
}

export default ListingProduct2;