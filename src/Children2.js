/**
 * Created by HuangXiaoFeng on 2018-08-17 0017.
 */

import  React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Children2 extends Component{

    render(){

        const { id }  = this.props.match.params;

        return (
            <div>
                <div>我是详情页</div>
                <div>首页传来的参数是：{id}</div>
                <Link to={'/'}>点我返回首页</Link>
            </div>
        )

    }

}

export default Children2;