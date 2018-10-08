import React, { Component } from 'react';
import './Filter.css';
import filterfunction from './FilterFunction';

// the PageHeader needs to be an object component,
// to keep track of the selections.

// as an alternative for the filter element, see:
// https://github.com/JedWatson/react-select / https://jedwatson.github.io/react-select/
// Or:
// https://www.npmjs.com/package/react-select-element

class FilterField extends Component {
    constructor(props){
        super(props);

        this.state = {
            value : '',
            values : ['', ...props.properties]
        }

    }

    componentDidMount(){
        filterfunction();
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

    render(){
        return(
            <div className="custom-select">
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    {this.displayOptions()}
                </select>
            </div>
        )
    }

}

export default FilterField;