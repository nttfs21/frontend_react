import React from 'react'
import PropTypes from 'prop-types'

export default class ClassDemo extends React.Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            active: false
        }
        this.setState({
            name: 'Indrasen',
            email: 'indrasen@gmail.com',
            active: true
        })
    }

    render() {
        return (
            <>
                <h1>Employee Manager</h1>
            </>
        )
    }
}
