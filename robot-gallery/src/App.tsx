import React, { useState, useEffect }  from 'react';
import logo from './assets/images/logo.svg';
// import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from  './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props {
  // username: string
}

interface State {
  robotGallery: any[],
  count: number
}

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `点了${count}`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data =  await res.json();
        setRobotGallery(data);
      } catch (e: any) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  // // * 生命周期 阶段1: 初始化
  // // 初始化组件 state
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     robotGallery: [],
  //     count: 0
  //   };
  // }

  // 在组件创建好dom元素胡，挂载进页面时调用
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => this.setState({ robotGallery: data }));
  // }

  // * 生命周期 阶段2: 更新
  // 在组件接收到一个新的 prop(更新后)时被调用
  // componentWillReceiveProps
  // state getDerivedStateFromProps(nextProps, prevState) {}
  // shouldComponentUpdate() {
  //   return nextState.some != this.state.some
  // }
  // 组件更新后调用
  // componentDidUpdate() {}

  // * 生命周期 阶段3: 销毁
  // 组件销毁后调用
  // 可当作析构函数 destructor 来使用
  // componentWillUnmount() {}

  // render() {
    return (
      <div className={styles.App}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人炫酷吊炸天online购物平台的名字特别特别长</h1>
        </div>
        {/* <h2>{props.username}</h2> */}
        {/* <Child username={props.username} /> */}
        <button
          onClick={() => {
            setCount(count+1)
          }}
        >点我</button>
        <span>count: {count}</span>
        {(!error || error !== '') && <div>网站出错啦：{error}</div>}
        <ShoppingCart />
          { !loading ? (
           <div className={styles.robotList}>
            {robotGallery.map((r) => (
              <Robot id={r.id} email={r.email} name={r.name} />
            ))}
            </div>
          ) : (
            <h2>loging 加载中</h2>
          )}
      </div>
    );
  // }
}

export default App;
