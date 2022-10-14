import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, price, category, img, stock, description}) => {

    const onAdd = (value) => {
        console.log(`Cantidad de items: ${value}`)
    }

    return (
        <div>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>${description}</p>
            <ItemCount initial={0} stock={stock} func={onAdd}/>
        </div>
    )
}

export default ItemDetail;