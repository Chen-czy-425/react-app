import React from "react";
import { useState } from "react";
import CartContext from "../store/cart-context";

// 计数器
const Counter = (props) => {

    const cartCtx = React.useContext(CartContext);

    const addButton =()=>{
        cartCtx.addMeal(props.meal);
    }
    const subButton =()=>{
        cartCtx.removeMeal(props.meal);
    }

    return (
        <div>
            {
                props.meal.amount > 0 &&
                <>
                    <button className="bg-[#FFF] " onClick={subButton}>-</button>
                    <span>{props.meal.amount}</span>
                </>
            }
            <button className="" onClick={addButton}>+</button>
        </div>
    )
}

export default Counter; 