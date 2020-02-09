import React, { Component } from 'react';
import Banner from '../info/Banner';
import SectionOne from '../body/SectionOne';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Banner />
                <SectionOne />
            </div>
         );
    }
}
 
export default Landing;