import { useState } from 'react';

const ItemCount = ({initial, stock, func}) => {

    const [counter, setCounter] = useState(0)

    const add = () => {
        counter < stock && setCounter(counter + 1)
    }

    const subtract = () => {
        counter > initial && setCounter(counter - 1)
    }

    return (
        <>
            <div>
                <div>
                    <span>{counter}</span>
                </div>
                <div>
                    <button disabled={counter === stock} onClick={add}>+</button>
                    <button disabled={counter === initial} onClick={subtract}>-</button>
                </div>
            </div>
            <button onClick={() => func(counter)} >Añadir al carrito</button>
        </>
    )
}

export default ItemCount;