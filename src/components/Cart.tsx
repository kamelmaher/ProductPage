import CartItem from "./CartItem"
type CartProps = {
    products: number[]
    clear: ()=> void
    deletet : (id:number) => void
}
function Cart({products , clear , deletet}:CartProps) {
    return (
        <div className="p-3 cart">
            <p>Cart</p>
            <hr />
            <ul className="list-group">
                {products.map((e , index) => {
                    return <CartItem index={index} key={index} count={e} deletet={deletet}/>
                })}
            </ul>
            <button className="add m-auto mt-3" onClick={()=> clear()}>Checkout</button>
        </div>
    )
}

export default Cart
