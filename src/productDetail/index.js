import React, { PureComponent } from 'react';
import './style.css';

class Index extends PureComponent {
 componentDidMount() {
  const { getProductList } = this.props;
  getProductList();
 }

 render() {
  const { productList } = this.props;
  let showProductList;
  if (productList) {
   showProductList = productList.map((item) => {
    return (
     <div className="product-item col-md-3 mt-5">
      <div className="box">
       <figure className="img-holder">
        <img
         className="img-fluid "
         src={item.product_image}
         alt="product img"
        />
       </figure>

       <div className="caption ">
        <a href="product-details.php" className="h6 font-weight-normal">
         {item.product_name}
         <span className="small d-block">{item.product_quantity} gr</span>
        </a>
        <p className="text-light-blue h5  text-capitalize">
         $ {item.product_price} / {item.product_basic_unit}
        </p>
       </div>
       <div className="btn-box ">
        <button className="btn btn-info round-xl round btn-lg item-btn-cart btn-block">
         {' '}
         add to cart
        </button>
       </div>
      </div>
     </div>
    );
   });
  }
  return (
   <div>
    <div className="container layout">
     <section className="home-products py-4">
      <div className="container">
       <div className="row no-gutters justify-content-between">
        <div className="col-9">
         <div className="main-heading text-left">
          <h3 className=""> Recommended For You </h3>
         </div>
        </div>
        <div className="col-3 text-right">
         <a
          href="#"
          className="btn  px-lg-4 btn-outline-info btn-lg round-xl round"
         >
          View All
         </a>
        </div>
       </div>
      </div>
      <div className="  bg-items">
       <div className="row">
        {/* <div className="col-12">
         <div className="js-products-slider"> */}
        {showProductList}
       </div>
      </div>
     </section>
    </div>
   </div>
  );
 }
}

export default Index;
