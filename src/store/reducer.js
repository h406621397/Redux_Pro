/**
 * Created by HuangXiaoFeng on 2018-08-08 0008.
 */

import { combineReducers }  from 'redux'
import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, CHANGE_INPUT_VALUE, INIT_TODO_LIST } from './actionTypes'

const defaultState = {
    inputValue: '',
    listArr: []
};

// 可以根据组件来分解reducer, 引入模块后合并到这个大的里面导出
/*export default combineReducers({

});*/

// component发送dispatch给store后，store调用此方法，将就的state和页面传过来的action传递进来
export default (state = defaultState, action) => {

    // 不能直接修改旧的state，所以copy一份进行修改然后返回给store
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type){
        case INIT_TODO_LIST:
            newState.listArr = action.data;
            return newState;
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_LIST_ITEM:
            newState.listArr.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case REMOVE_LIST_ITEM:
            newState.listArr.splice(action.index, 1);
            return newState;
        default:
            return state;
    }

}
