import asd from '../../images/1.jpg';
import Counter from '../../common/Counter';
const Meal = (props) => {
    return (
        <div className="mt-[20px] px-[20px] flex items-center justify-center " >
            <img src={props.meal.img} alt="food" className='w-[240rem] block' />
            <div className="ml-[5px] w-[680rem]">
                <h1 className=' text-[60rem] font-bold'>{props.meal.title}</h1>
                <p className=" text-[30rem]">
                    {props.meal.desc}
                </p>
                <div className=' text-[45rem] mt-[10px] flex justify-between'>
                    <span className='block'>￥{props.meal.price}</span>
                    <Counter
                        meal={props.meal} 
                        ></Counter>
                </div>
            </div>
        </div>
    )
}

// 食物列表
const Meals = (props) => {
    return (

        <div div className='absolute top-[100rem] left-0 overflow-auto' >
            {
                props.mealsData.map(
                    item =>
                        <Meal key={item.id} meal={item}></Meal>
                )

            }
        </div >
    )
}

export default Meals;