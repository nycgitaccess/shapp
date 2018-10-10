import React, { Component } from 'react';

// COMPONENTS
import FilterField from './filterselectors/Filter';
import SearchField from './searchfield/SearchField';

// CSS
import './PageHeader.css';

// the PageHeader needs to be an object component,
// to keep track of the selections.

class PageHeader extends Component {
    constructor(props){
        super(props);

        // PROPS:
        // page={this.state.page}
        // results={this.state.results}
        // filters={this.state.filters}
        // addFilter={this.addFilter}
        // searchWord={this.searchWord}
        // handleSearch={this.handleSearch}
        
        this.state = {
            page: this.props.page,
            results: this.props.results,
            filters: this.props.filters,
            addFilter: this.props.addFilter,
            searchWord: this.props.searchWord,
            handleSearch: this.props.handleSearch
        }
    }

    componentDidMount(){
        console.log(this.props.page);
    }

    render(){
        const headerStyle = {
            padding: '10px'
        }
        return(
            <div style={headerStyle}>
                <SearchField />

                {/* <FilterField properties={this.state.values}/> */}
                <p>count      add filter button</p>
            </div>
        )
    }

}

export default PageHeader;