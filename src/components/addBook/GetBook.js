import React from "react";
import Popup from "../common/Popup";
import axios from "axios";
class GetBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      content: "",
      visible: false
    };
  }

  closePopup = () => {
    this.setState({
      visible: false
    });
  };
  componentDidMount() {
    axios.get("/api/get").then(result => {
      if (result.data.length > 0) {
        this.setState({
          bookList: result.data
        });
      } else {
        this.setState({
          visible: true,
          content: "No Records Found"
        });
      }
    });
  }
  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">ISBN no.</th>
              <th scope="col">Issued Date</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>{this.createTable()}</tbody>
        </table>
        <Popup
          content={this.state.content}
          visible={this.state.visible}
          closePopup={this.closePopup}
        />
      </div>
    );
  }

  createTable = () => {
    return this.state.bookList.map((value, index) => {
      return (
        <tr key={`bookList-${index}`}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.isbn}</td>
          <td>{value.date}</td>
          <td>{value.category}</td>
        </tr>
      );
    });
  };
}

export default GetBook;
