import React from 'react';

import HeaderComponent from './headercomponent';
import BodyComponent from './bodycomponent';
import FooterComponent from './footercomponent';

class HomepageComponent extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {

        return (
                <div>
                    <HeaderComponent history={this.props.history}/>
                    <BodyComponent/>
                    <FooterComponent/>
                 </div>   
                );

    }
}

export default HomepageComponent;