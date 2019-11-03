/* eslint-disable react/prop-types */
import React from "react";
import "./Style.css";

class Popup extends React.Component {
  render() {
    return (
      this.props.visible && (
        <div className="popup">
          <div className="popup_inner">
            <h1
              className={
                this.props.content === "success"
                  ? "success-content"
                  : "failure-content"
              }
            >
              {this.props.content}
            </h1>
            <div className="wrapper">
              <button className="button" onClick={this.props.closePopup}>
                close
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Popup;
