/**
 * Created by HuangXiaoFeng on 2018-08-17 0017.
 */

import  React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Children extends Component{

    render(){

        return (
            <div>
                <div>我是首页</div>
                <Link to={'/detail/123'}>跳转详情页</Link>
            </div>
        )

    }

}

export default Children;