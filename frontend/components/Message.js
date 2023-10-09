import React from 'react'
import { connect } from 'react-redux';

const Message = ({message}) => {
  return <div id="message">{message === '' ? '' : message}</div>
}

const mapStateToProps = state => {
  return {
    message: state.infoMessage,
  };
};

export default connect(mapStateToProps, {})(Message);