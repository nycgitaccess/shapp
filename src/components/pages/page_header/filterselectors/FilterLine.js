import React, { Component } from 'react';

import FilterField from './Filter';

class FilterLine extends Component {
    constructor(props){
        super(props);

        // In the state:
        // active: the filter category has been chosen or not.
        // if active:true, display the second filter.
        // categories: the options of the first filter.
        // options: the options of the second filter.
        this.state = {
            url: this.props.url,
            active: false,
            categories: [],
            category: null,
            options: null
        }
    }

    displayFilter(){
        let filters = [];

        this.state.active
        ? filters = <FilterField properties={this.state.categories}/>
        : filters = [
                        <FilterField
                            properties={this.state.categories}
                            value={this.state.category}
                        />,
                        <FilterField properties={this.state.options}/>
                    ]

        return filters;
    }

    render(){
        // style to have the filters inline
        return(
            <div>
                {this.displayFilters()}
            </div>
        )
    }
}

export default FilterLine;
