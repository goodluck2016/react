import React from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';

interface Props {}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: any) {
    console.log('e.target', e.target)
    console.log('e.currentTarget', e.currentTarget) // 事件处理绑定的元素
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={this.handleClick}
        >
          <FiShoppingCart />
          <span>购物车 2 (件)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  };
}

export default ShoppingCart;