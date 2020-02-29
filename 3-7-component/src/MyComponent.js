import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕하세요 {name} 이름 입니다 <br />
        안녕하세요 {favoriteNumber} 좋아하는 숫자 입니다 <br />
        안녕하세요 {children} 자식 입니다 <br />
      </div>
    );
  }
}

MyComponent.defaultProps = { name: '기본이름' };

MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;
