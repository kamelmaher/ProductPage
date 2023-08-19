type DescProps = {
    click: () => void
    count: (number: number) => void
    counter: number
}
function Desc({click , count , counter}:DescProps) {
    return (
        <div className="pt-4 desc">
            <h3 className="fw-bold">Sneaker Company</h3>
            <h1 className="fw-bold">Fall Limited Edition Sneakers</h1>
            <p className="text-black-50 mt-4 lh-lg description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta cupiditate expedita animi rem quisquam. Odio, rerum asperiores sequi dolor dicta tempore, velit consequuntur error nobis quis officiis quaerat deleniti placeat.
            </p>
            <div className="price">
                <div className="d-flex gap-3 align-items-center">
                    <p className="mb-0 old-price fs-3 fw-bold">$125.00</p>
                    <p className="discount mb-0">50%</p>
                </div>
                <del className="old-price text-black-50 fw-bold">$250.00</del>
            </div>
            <div className="d-flex gap-5 align-items-center">
                <div className="control d-flex gap-3">
                    <span onClick={() => count(counter > 0 ? -1 : 0)}>-</span>
                    <span>{counter}</span>
                    <span onClick={() =>count(1)}>+</span>
                </div>
                <button className="add" onClick={()=> click()}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Desc
