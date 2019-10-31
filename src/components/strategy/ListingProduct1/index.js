import React from 'react';
import CardHeader from './Card/CardHeader';
import CardItemRelevent from './Card/CardItemRelevent';
import CardBody from '../ListingProduct1/Card/CardBody';

const ListingProduct1 = () => {
    return (
        <div>
            <div className="a07listing1product1textlabelhorizontal1">
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

export default ListingProduct1;