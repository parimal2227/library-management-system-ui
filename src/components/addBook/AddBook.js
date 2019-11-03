import React from "react";
import Popup from "../common/Popup";
import axios from "axios";
class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isbn: "",
      date: "",
      category: "",
      content: "",
      visible: false
    };
  }
  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  closePopup = () => {
    this.setState({
      visible: false
    });
  };
  mySubmitHandler = event => {
    event.preventDefault();
    const { name, isbn, date, category } = this.state;
    axios
      .post("/api/add", {
        name,
        isbn,
        date,
        category
      })
      .then(res => {
        if (res.data.responseString == "success") {
          this.setState({
            content: "success",
            visible: true
          });
          document.getElementById("addBook").reset();
        } else {
          this.setState({
            content: "failed",
            visible: true
          });
        }
      });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.mySubmitHandler}
          className="addBookForm card p-1 bg-light"
          id="addBook"
        >
          <div className="form-group">
            <label htmlFor="bookName">Book Name </label>
            <input type="text" name="name" onChange={this.myChangeHandler} />
            <small id="bookNameHelp" className="form-text text-muted">
              Please enter the name of book here
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN No. </label>
            <input type="text" name="isbn" onChange={this.myChangeHandler} />
            <small id="isbnHelp" className="form-text text-muted">
              Please enter the ISBN of book here
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="issueDate">Issuing Date </label>
            <input type="text" name="date" onChange={this.myChangeHandler} />
            <small id="dateHelp" className="form-text text-muted">
              Please enter the Issuing Date of book here
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="bookCategory">Book Category </label>
            <input
              type="text"
              name="category"
              onChange={this.myChangeHandler}
            />
            <small id="categoryHelp" className="form-text text-muted">
              Please enter the category of book here
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Popup
          content={this.state.content}
          visible={this.state.visible}
          closePopup={this.closePopup}
        />
      </div>
      // <div>
      //   <form onSubmit={this.mySubmitHandler}>
      //     <h1>Add A Book Here</h1>
      //     <p>Enter book name:</p>
      //     <input type="text" name="name" onChange={this.myChangeHandler} />
      //     <p>Enter book isbn:</p>
      //     <input type="text" name="isbn" onChange={this.myChangeHandler} />
      //     <p>Enter date:</p>
      //     <input type="text" name="date" onChange={this.myChangeHandler} />
      //     <p>Enter category:</p>
      //     <input type="text" name="category" onChange={this.myChangeHandler} />
      //     <div>
      //       <button type="submit">ADD</button>
      //     </div>
      //   </form>
      //   <Popup
      //     content={this.state.content}
      //     visible={this.state.visible}
      //     closePopup={this.closePopup}
      //   />
      // </div>
    );
  }
}

export default AddBook;
