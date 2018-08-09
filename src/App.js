import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css';
import { addListItemAction, removeListItemAction, changeInputValueAction, getTodoListAction } from './store/actionCreators'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.initTodoList();
    }

    _btnClick = () => {
        if(this.props.inputValue !== ''){
            this.props.addBtnClick();
        }
    };

    _renderList = (item, index) => {
        return (
            <List.Item key={index} onClick={()=> this.props.itemClick(index)} >
                <TodoList content={item} />
            </List.Item>
        )
    };


    render() {
        const { inputValue, inputChange, listArr } = this.props;
        return (
            <div style={{ marginTop: '60px', marginLeft: 'auto',  marginRight: 'auto', width: '500px' }}>
                <label htmlFor="name">请输入：</label>
                <Input
                    id="name"
                    size="small"
                    placeholder="待办事项"
                    value={inputValue}
                    onChange={inputChange}
                    style={{width: '200px', height: '30px', margin: '10px'}}
                />
                <Button type="primary" onClick={this._btnClick}>添加待办</Button>

                <List
                    style={{ width: '350px' }}
                    size="large"
                    bordered
                    dataSource={listArr}
                    renderItem={(item, index) => this._renderList(item, index)}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        listArr: state.listArr
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initTodoList: () => {
            const action = getTodoListAction();
            // 使用redux-thunk后，store.dispatch可以接收一个函数。否则只能接收对象形式的action
            dispatch(action);
        },
        inputChange: e => {
            const action = changeInputValueAction(e.currentTarget.value);
            dispatch(action);
        },
        addBtnClick: () => {
            const action = addListItemAction();
            dispatch(action);
        },
        itemClick: (index) => {
            const action = removeListItemAction(index);
            dispatch(action);
        }
    }
};

// connect函数用于将store和当前组件连接起来，并且数据改变，页面自动变。不需要store.subscribe监听改变了
// mapStateToProps用于将store里的state里的某些属性注入到当前组件的props里
// mapDispatchToProps用于将store.dispatch方法注入到当前组件的props里
export default connect(mapStateToProps, mapDispatchToProps)(App);
