import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { getProducts } from '../../../modules/products/actions';

import ProductItem from '../../../components/atoms/ProductItem/ProductItem';
import Container from '../../../containers/Container/Container';

import './HomePage.css';

type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
  products: D.ProductsState,
};

const titleProps = {
  title: '精选',
};

const HomePage = (props: HomePageProps<object>) => {
  const { dispatch, products } = props;
  dispatch(getProducts());
  return (
    <div className="homePage">
      <Container titleProps={titleProps} showMenuBar={true}>
        {
          products && products.map((product, idx) => (
            <ProductItem
              key={idx}
              img={product.img}
              name={product.name}
              price={product.price}
              owner={product.owner.username}
            />))
        }
      </Container>
    </div>
  );
};

export default connect(
    (state: D.RootState<object>) => ({products: state.products})
)(HomePage);
