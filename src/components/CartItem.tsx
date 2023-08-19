import img from "../../images/image-product-1-thumbnail.jpg";
type CartItemProps = {
    count: number
    deletet: (id:number) => void
    index:number
}
function CartItem({count , deletet , index}:CartItemProps) {
    return (
        <li className="list-group-item ms-0">
                <div className="d-flex gap-3 align-items-center">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                        <p className="mb-0"> Price: $125 </p>
                        <p className="mb-0"> Count: {count} </p>
                        <p className="mb-0"> Total: {count * 125} </p>
                    </div>
                </div>
            <div>
                <button className="m-auto d-block btn btn-outline-danger" onClick={()=>{
                    console.log(index , "From Cart Item")
                    deletet(index)
                }}>delete</button>
            </div>
        </li>
    )
}

export default CartItem
