import React, { Component } from 'react';

import FilterField from './Filter';
import './PageHeader.css';

// the PageHeader needs to be an object component,
// to keep track of the selections.

class PageHeader extends Component {
    constructor(props){
        super(props);

        this.state = {
            values : [...props.properties],
            otherValues : [
                'Athens',
                'Paris',
                'Thessaliniki',
                'Berlin'
            ]
        }

    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    displayOptions = () => {
        let options = this.state.values.map((item, i) => {
            console.log(item);
            if (i === 0) return <option key={i} value='' style={{color:'#ebebeb'}}>Filter By...</option>
            else return <option key={i} value={item}>{item}</option>
        })
        return options;
    }

    addFilter = () => {
        // Add a filter to this.state.filterlist
        // then a filter is active (displays the second select)
        // or inactive ('Filter By...', no second select.)
    }

    render(){
        const headerStyle = {
            padding: '10px'
        }
        return(
            <div style={headerStyle}>
                <p>Search field</p>
                <FilterField properties={this.state.values}/>
                <FilterField properties={this.state.otherValues}/>
                <p>count      add filter button</p>
            </div>
        )
    }

}

export default PageHeader;