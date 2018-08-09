/**
 * Created by HuangXiaoFeng on 2018-08-08 0008.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        content: '哈哈'
    };

    static propTypes = {
        content: PropTypes.string.isRequired
    };

    render(){
        const { content } = this.props;
        return (
            <li>{ content }</li>
        )
    }

}

export default TodoList;