import React, { Component } from "react";

class MyTitleForm extends Component {
  constructor(props) {
    super(props);
    // this.state = { title: "" };
    console.log(this);
  }

  render() {
    return (
      <div>
        {/* <h1>
          <strong>{this.state.title}</strong>
        </h1> */}
        <label htmlFor="title" />
        <input
          id="title"
          type="text"
        //   value={this.state.title}
          onChange={event => {
            const input = (event.target, "");
            console.log(input.value);
            this.setState({
              title: event.target.value.replace(/[/*\\]/gi, "")
            });
          }}
        />
      </div>
    );
  }
}

export default MyTitleForm;
