import React, { Component } from 'react';

import PageHeader from './page_header/PageHeader';

// a false body, placeholder for the real one.
import PageBody from './page_body/PageBody';

class PageContainer extends Component {
    
    constructor(props){
        super(props);

        // the page is the name of the page.
        // It will be passed to the page_body, to display the according cards.
        // page: this.props.page,
        //
        // the filters are stocked here. when there's a filter added,
        // the page_body will be refreshed accordingly.
        //
        // the search stocks the string of the search.
        // on submit change, it will be passed to the page_body, to filter the results.
        //
        // the results stock the number of results, so it can be displayed in the page_header.
        this.state = {
            page: "trainings",
            filters: [],
            searchWord: null,
            results: 0
        }
        

    }

    addFilter(filter){
        // the filter is an object containing the category and the option.
        this.setState( (prevstate) => ({
            filters: [...prevstate.filter, filter]
        }))
    }

    handleSearch(word){
        this.setState({
            searchWord: word
        })
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
                <PageHeader
                    page={this.state.page}
                    results={this.state.results}
                    filters={this.state.filters}
                    addFilter={this.addFilter}
                    searchWord={this.searchWord}
                    handleSearch={this.handleSearch}
                />
                <PageBody />
            </div>
        )
    }
}

export default PageContainer;