import React from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from  './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props {}

interface State {
  robotGallery: any[],
  count: number
}

class App extends React.Component<Props, State> {
  // * 生命周期 阶段1: 初始化
  // 初始化组件 state
  constructor(props: Props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
  }

  // 在组件创建好dom元素胡，挂载进页面时调用
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ robotGallery: data }));
  }

  // * 生命周期 阶段2: 更新
  // 在组件接收到一个新的 prop(更新后)时被调用
  // componentWillReceiveProps
  // state getDerivedStateFromProps(nextProps, prevState) {}
  // shouldComponentUpdate() {
  //   return nextState.some != this.state.some
  // }
  // 组件更新后调用
  componentDidUpdate() {}

  // * 生命周期 阶段3: 销毁
  // 组件销毁后调用
  // 可当作析构函数 destructor 来使用
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字特别特别长</h1>
        </div>
        <button
          onClick={() => {
            // setState异步更新，同步执行
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 }
            }, () => {
              console.log('count', this.state.count);
            });
            this.setState((preState, preProps) => {
              return { count: preState.count + 1 }
            }, () => {
              console.log('count', this.state.count);
            });
          }}
        >点我</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {
            this.state.robotGallery.map( r => <Robot id={r.id} email={r.email} name={r.name} key={r.id} /> )
          }
        </div>
      </div>
    );
  }
}

export default App;
