import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const {action} = this.props;
        return(
            <div className="Filter">
                 <input className="Name__field" onKeyUp={action}></input>
            </div>
            
        );
    }
}



export default Filter;