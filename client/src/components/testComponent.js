import React from 'react';
import axios from 'axios';

export default class TestComponent extends React.Component
{
    constructor(props)
    {
        super();
        this.state ={
            Message : 'this is default header message'
        };
    }

    componentWillMount()
    {
        console.log('component will mount event');
        axios.get('api')
        .then( res => {
            console.log(res.data);
            this.setState({Message : res.data});
        });
    }
    render()
        {
            return (
                <div>
                {this.state.Message}
                </div>
            )
        };
    
}