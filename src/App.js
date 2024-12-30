import React, { Fragment } from 'react';
import img from './images/1.jpg'
/***
 * 
 * React.Fragment
 *  - 是一个专门用来做父容器的组件
 *  - 他只会将里边的子元素返回，不会创建新的多余元素
 *  - 例如
 *      <div>
 *          balabalabala
 *      </div>
 *      等于 ===>
 *      <>
 *          balabalabala
 *      </>
 *      等于 ===>
 *      <Fragment>
 *          balabalabala
 *      </Fragment>
 * 
 * 
 */

import Search from './components/Search/Search';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
const MEALS = [
    {
        id: '1',
        title: "猪肉",
        desc: "鸿运当头6666666",
        price: 5,
        img: img
    },
    {
        id: '2',
        title: "鸡肉",
        desc: "鸿运当头666",
        price: 25,
        img: img
    },
    {
        id: '3',
        title: "鴨肉",
        desc: "鸿运当头666鸿运当头666",
        price: 65,
        img: img
    },
    {
        id: '4',
        title: "牛肉",
        desc: "sb鸿运当头666鸿运当头666鸿运当头666lsj",
        price: 77,
        img: img
    },
    {
        id: '5',
        title: "猪肉",
        desc: "鸿运当头6666666",
        price: 5,
        img: img
    },
    {
        id: '6',
        title: "鸡肉",
        desc: "鸿运当头666",
        price: 25,
        img: img
    },
    {
        id: '7',
        title: "鴨肉",
        desc: "鸿运当头666鸿运当头666",
        price: 65,
        img: img
    },
    {
        id: '8',
        title: "牛肉",
        desc: "sb鸿运当头666鸿运当头666鸿运当头666lsj",
        price: 77,
        img: img
    }

]

const App = () => {

    // 创建state存储食物列表
    const [mealsData, setMealsData] = React.useState(MEALS);

    // 创建一个State来保存当购物车的数据
    /**
     * items:商品
     * totalAmount:总数
     * totalPrice:总价
     */
    const [cartData, setCartData] = React.useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0,
    });

    // 添加到购物车
    const addMeal = (meal) => {
        // meal:当前点击的商品
        // 对购物车进行浅复制
        const newCartData = { ...cartData };

        // 判断购物车中是否存在该商品
        if (newCartData.items.indexOf(meal) === -1) {
            // 添加商品
            newCartData.items.push(meal);
            meal.amount = 1;
        } else {
            meal.amount += 1;
        }
        newCartData.totalAmount += 1;
        // 增加总金额
        newCartData.totalPrice += meal.price;

        setCartData(newCartData);
    };

    // 减少商品数量
    const removeMeal = (meal) => {
        const newCartData = { ...cartData };
        meal.amount -= 1;
        newCartData.totalAmount -= 1;
        // 删除商品
        if (meal.amount === 0) {
            newCartData.items.splice(newCartData.items.indexOf(meal), 1);
        }
        newCartData.totalPrice -= meal.price;
        setCartData(newCartData);
    };


    // 过滤
    const filterMeals = (keyword) => {
        const newMeals = MEALS.filter(item => item.title.indexOf(keyword) !== -1);
        setMealsData(newMeals);
    };
    return (
        <Fragment >
            <CartContext.Provider value={{ ...cartData, addMeal, removeMeal }}>
            <Search onSearch = {filterMeals}></Search>
                <div className="w-[750rem] ">
                    
                    <Meals mealsData={mealsData}></Meals>
                </div>
            </CartContext.Provider>
        </Fragment>
    );
}

export default App;
