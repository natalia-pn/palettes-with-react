import React, { Component } from 'react';

class FilteredList extends Component {
    render() {
        const {filterAction} = this.props;

        console.log(filterAction)
        return(
            filterAction.map(item=>{
                   return(
                       <li className="Filtered__item">
                            <h2 classNme="Filtered__name">{item.name}</h2>
                       </li>
                   )
               })
        );
    }
}

export default FilteredList;
