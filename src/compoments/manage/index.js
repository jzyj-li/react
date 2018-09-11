import React, {Component} from 'react';

class Release extends Component {
    constructor (props){
        super(props)
    }
    componentDidMount () {
    }
    componentDidUpdate () {
        console.log('22')
    }
    render () {
        return (
            <div>
                内容管理
            </div>
        )
    }
}

export default Release