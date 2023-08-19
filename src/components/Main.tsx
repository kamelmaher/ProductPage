import Desc from "./Desc"
import Product from "./Product"
type MainProps = {
    click: ()=> void
    count: (number: number)=> void,
    counter: number
}
function Main({click , count , counter}:MainProps) {
    return (
        <main className="row justify-content-around mt-3">
            <div className="col-md-5">
                <Product />
            </div>
            <div className="col-md-6">
                <Desc click={click} counter = {counter}count={count}/>
            </div>
        </main>
    )
}

export default Main
