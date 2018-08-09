/**
 * Created by HuangXiaoFeng on 2018-08-09 0009.
 */

import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, CHANGE_INPUT_VALUE, INIT_TODO_LIST } from './actionTypes'
import axios from 'axios'

// 添加待办
export const addListItemAction = () => ({
    type: ADD_LIST_ITEM
});

// 删除待办，传入数组索引
export const removeListItemAction = (index) => ({
    type: REMOVE_LIST_ITEM,
    index
});

// 改变待办输入框的值
export const changeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

// 初始化待办列表数据
export const initTodoListAction = (data) => ({
    type: INIT_TODO_LIST,
    data
});

// 异步获取待办数据
// 使用redux-thunk后，store.dispatch可以接收一个函数。而action可以返回一个函数。该函数默认接收dispatch参数
export const getTodoListAction = () => {
    return (dispatch, getState) => {
        axios.get('https://www.easy-mock.com/mock/5b0e01738f54a257757e130d/api/todo').then((res) => {
            const action = initTodoListAction(res.data);
            dispatch(action);
        })
    }
};
