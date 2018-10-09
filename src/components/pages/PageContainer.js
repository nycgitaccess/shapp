import React, { Component } from 'react';

import PageHeader from './page_header/PageHeader';

// a false body, placeholder for the real one.
import PageBody from './page_body/PageBody';

class PageContainer extends Component {
    
    constructor(props){
        super(props);

        // The Page Container will contain the state,
        // with the references to the cards, allowing to filter the Cards
        // This is temporary.
        this.state = {
            cards:[],
            properties:[
                'country',
                'city',
                'name',
                'date'
            ]
        }
        

    }

    componentDidMount(){
        // call to db. Fill the state with the data.
    }

    render(){
        const pageStyle = {
            position: 'fixed',
            right: '0',
            top: '0',
            backgroundColor: '#ebebeb',
            width: '80%',
            height:'100vh'
        }

        return(
            <div style={pageStyle}>
                <PageHeader properties={this.state.properties}/>
                <hr/>
                <PageBody />
            </div>
        )
    }
}

export default PageContainer;