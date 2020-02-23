import React, { Component } from 'react';
import Scroll from './Scroll';

class App extends Component {
  render() {
    return (
      <div>
        <Scroll
          ref={ref => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
      </div>
    );
  }
}

export default App;
