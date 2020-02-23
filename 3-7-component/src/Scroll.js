import React, { Component } from 'react';

class Scroll extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.Box;

    this.Box.scrollTop = scrollHeight - clientHeight;
  };
  scrollToTop = () => {
    const { scrollHeight, clientHeight } = this.Box;
    this.Box.scrollTop = clientHeight - scrollHeight;
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto', // 콘텐츠의 양에 따라 스크롤 가능 여부 만들어줍니다.
      position: 'relative' // 다른 엘리먼트와의 관계를 설정하기 편하게 하기 위해 설정 한다.
    };
    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white,black)'
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.Box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default Scroll;
