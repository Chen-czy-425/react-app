/**
 * 公共存储空间，将多个组件共享的数据存储在公共空间中，方便组件之间共享数据
 * 避免props深层传递
 * 
 * 使用一:
 *  - 1. 创建Context对象
 *  - 2. 使用Xxx.Consumer 组件创建元素
 *       标签体需要一个回调函数
 *          <Xxx.Consumer>{ 
 *              (value)={
 *                  return <div>{value}</div>
 *              }
 *           }</Xxx.Consumer>
 * 
 * 使用二:
 *  - 1. 创建Context对象
 *  - 2. 使用钩子函数 useContext(Xxx)
 */

import React from 'react';
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    addMeal: () => {},
    removeMeal: () => {},
});

export default CartContext;