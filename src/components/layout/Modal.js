import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {

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
      // Modal
      <div className="modal fade show" id="display-flight-log" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-keyboard="false" data-backdrop="static" style={{display: 'block'}} aria-modal="true">
        <div className="modal-dialog display-flight-log bg-light" role="document">
          <div className="container">
            <div className="modal-content">
              <div className="modal-body">
                <button onClick={ this.props.onClose } type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>

                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal