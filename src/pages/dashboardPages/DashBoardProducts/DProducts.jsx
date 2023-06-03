
import Carousel from "../../../components/Carousel/Carousel";
import "./dproducts.css"
import "./pluse-icon.svg"
import { AiOutlinePlus } from "react-icons/ai"
const DProducts = ({ products }) => {
    return (
        <div className="background-gc dproducts">
            <div className="admin-product-control">
                <div class="dropdown drop">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item">GPS</li>
                        <li class="dropdown-item">Dry Food</li>
                        <li class="dropdown-item">shampoo</li>
                        <li class="dropdown-item">dishes</li>

                    </ul>

                </div>
                <AiOutlinePlus className="admin-pluse-icon"/>
            </div>
            <div className="products-carousel">
                <Carousel items={products} />
            </div>
        </div>
    )
}

export default DProducts;