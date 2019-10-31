import React from 'react';
import Strategy from '../strategy';

const Container = () => {
    return (
        <div>
            <input id="anPageName" name="page" type="hidden" defaultValue="a100investmentstrategy" />
            <Strategy/>
        </div>
    );
}

export default Container;