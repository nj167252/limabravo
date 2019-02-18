import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

class ModalPortal extends Component {

  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default ModalPortal