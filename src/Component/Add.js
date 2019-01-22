import React from 'react';

export default class Adder extends React.Component {
    render() {
        return (
            <form>
            ID: <input  name="id" /><span/><span/>
            Name: <input name="name" /> <span/><span/>
            Age: <input name="age"/><span/><span/>
            <button onClick={this.props.addName}>Add</button>
            </form>
        );
    }
}