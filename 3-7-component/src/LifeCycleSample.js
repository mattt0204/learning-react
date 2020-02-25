import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = { number: 0, color: null };
  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 받아온 속성중에 색깔이 다르면 업데이트, 같다면 반환하지 않음 , 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 바뀌어진 속성과 상태 출력, 기본적으로 이 함수는 true를 출력하므로 리렌더링을 하지 않고 싶은 조건에만 설정하면 됨
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 끝 자리 수가 4로 끝나지 않는다면 리렌더링을 하지 않음 (4일때만 거짓 반환)
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    // 이전 속성의 칼라와 현재와 다르다면 myRef.style.color를 반환, 컴포넌트의 속성에 접근할 때 ref를 사용합니다.
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    if (snapshot) {
      console.log('업데이트되기 직전 색상', snapshot);
    }
  }
  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };
    return (
      <div>
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
