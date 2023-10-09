import React from 'react'
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

const Wheel = ({ wheel, moveClockwise, moveCounterClockwise }) => {

  const onClockwiseClick = () => {
    console.log('clockwise');
    console.log(wheel);
    moveClockwise(wheel + 1);
  }

  const onCounterClockwiseClick = () => {
    console.log('counterclockwise');
    console.log(wheel);
    moveCounterClockwise(wheel - 1);
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div key='0' className={`cog${0 === wheel ? ' active' : ''}`} style={{ "--i": 0 }}>{0 === wheel ? 'B' : null}</div>
        <div key='1' className={`cog${1 === wheel ? ' active' : ''}`} style={{ "--i": 1 }}>{1 === wheel ? 'B' : null}</div>
        <div key='2' className={`cog${2 === wheel ? ' active' : ''}`} style={{ "--i": 2 }}>{2 === wheel ? 'B' : null}</div>
        <div key='3' className={`cog${3 === wheel ? ' active' : ''}`} style={{ "--i": 3 }}>{3 === wheel ? 'B' : null}</div>
        <div key='4' className={`cog${4 === wheel ? ' active' : ''}`} style={{ "--i": 4 }}>{4 === wheel ? 'B' : null}</div>
        <div key='5' className={`cog${5 === wheel ? ' active' : ''}`} style={{ "--i": 5 }}>{5 === wheel ? 'B' : null}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={onCounterClockwiseClick}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={onClockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel,
  };
};

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);