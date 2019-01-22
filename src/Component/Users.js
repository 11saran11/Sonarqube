import React from 'react';

export default class Users extends React.Component{
    render() {
        return(
            <div>
            <span>
                <h4>Id:{this.props.idProps}</h4>
                <h4>Name:{this.props.children}</h4>
                <h4>Age:{this.props.ageProps}</h4>
            </span>
            <label><strong>Change User Name:</strong></label>
            <input onChange={this.props.chngeName} value={this.props.children} /><br/><br/>
            <label><strong>Delete Here</strong></label>
            <button  onClick={this.props.delEvent}>Delete</button> <br/> <br/>
            <hr/>
        </div>
        );
    }
}


