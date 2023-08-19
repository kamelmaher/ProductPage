import img1 from "../../images/image-product-1.jpg"
import img2 from "../../images/image-product-2.jpg"
import img3 from "../../images/image-product-3.jpg"
import img4 from "../../images/image-product-4.jpg"
import img1t from "../../images/image-product-1-thumbnail.jpg"
import img2t from "../../images/image-product-2-thumbnail.jpg"
import img3t from "../../images/image-product-3-thumbnail.jpg"
import img4t from "../../images/image-product-4-thumbnail.jpg"
import { useState } from "react"
function Product() {
    const [selectedImg, setSelectedImg] = useState(img1);
    return (
        <div className="product ps-3">
            <div className="img mb-4">
                <img src={selectedImg} alt="" className="img-fluid"/>
            </div>
            <ul className="d-flex  justify-content-around p-0">
                <li>
                    <img src={img1t} alt="" className="img-fluid" onClick={()=> {
                        setSelectedImg(img1)
                    }}/>
                </li>
                <li>
                    <img src={img2t} alt="" className="img-fluid" onClick={()=> {
                        setSelectedImg(img2)
                    }}/>
                </li>
                <li>
                    <img src={img3t} alt="" className="img-fluid" onClick={()=> {
                        setSelectedImg(img3)
                    }} />
                </li>
                <li>
                    <img src={img4t} alt="" className="img-fluid" onClick={()=> {
                        setSelectedImg(img4)
                    }}/>
                </li>
            </ul>
        </div>
    )
}

export default Product
