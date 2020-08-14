import React from 'react'
import Proptypes from 'prop-types'
import '../styles/Product.css'

function Product(props: any) {
    return (
        <>
        <div className="col-12 col-sm-12 col-md-4" >
           <div className="product" >
               <div className="product-img">
                   <img
                   src= {props.photo}
                   className="img-fluid d-block mx-auto"
                   alt = {props.photo}/>
               </div>
               <div className="product-name-cost">
                   <h5 className="float-left gold">{props.name} </h5>
                   <h6 className="float-right font-weight-bold"> Ksh  {props.price}</h6>
               </div>
               <div >
               </div>
           </div>

       </div>
        </>
    );
}

Product.propTypes = {
    name: Proptypes.string,
    size: Proptypes.string,
    price: Proptypes.string,
    photo: Proptypes.any,
    id: Proptypes.string
}

export default Product;