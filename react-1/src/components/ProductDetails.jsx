import { useParams } from 'react-router-dom'
function ProductDetails() {

    // const { id } = useParams();
    // console.log(typeof id);
    // console.log(id);

    const param = useParams();
    console.log(typeof param);

}

export default ProductDetails