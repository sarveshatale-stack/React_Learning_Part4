import React, { Component } from "react";
import PureComponent1 from "./PureComponent";
import RegularComponent from "./RegularComnent";
import MemoComponent from "./MemoComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ABC"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "XYZ"
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <MemoComponent name={this.state.name} />
        {/* <PureComponent1 name={this.state.name}/>
        <RegularComponent name={this.state.name}/> */}
        Parent compoenent
      </div>
    );
  }
}
export default ParentComponent;
