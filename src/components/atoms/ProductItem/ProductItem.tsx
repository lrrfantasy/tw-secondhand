import * as React from 'react';

import './ProductItem.css';

interface Props {
  img: string;
  name: string;
  price: string;
  owner?: string;
  status?: string;
  inactive?: boolean;
}

class ProductItem extends React.Component<Props, any> {
  render() {
    const img = require('../../../assets/logo.png');
    return (
      <div className={`productItem ${this.props.inactive && 'inactive'}`}>
        <div className="product-img"><img className="img" src={img} /></div>
        <div className="product-info">
          <span className="product-name">{this.props.name}</span>
          <span className="product-price">{`¥ ${this.props.price}`}</span>
          {this.props.owner && <span className="product-owner">{this.props.owner}</span>}
          {this.props.status && <span className="product-status">{this.props.status}</span>}
        </div>
      </div>
    );
  }
}

export default ProductItem;
