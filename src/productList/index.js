import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getCategoryList, getProductList } from '../reducer/product';
import Header from '../sharedComponents/header';
import ProductDetail from '../productDetail';
class Index extends PureComponent {
 gotoProductDetail = (id) => {
  console.log('go');
  window.location.href = `/productDetail/${id}`;
 };

 render() {
  const {
   categoryList,
   getCategoryList,
   productList,
   getProductList,
  } = this.props;

  let showList;
  return (
   <div>
    <Header getCategoryList={getCategoryList} categoryList={categoryList} />
    <ProductDetail getProductList={getProductList} productList={productList} />
   </div>
  );
 }
}

const mapStateToProps = (state) => ({
 productList: state.product.productList,
 categoryList: state.product.categoryList,
});

const mapDispatchToProps = (dispatch) => {
 return {
  getCategoryList: () => dispatch(getCategoryList()),
  getProductList: () => dispatch(getProductList()),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
