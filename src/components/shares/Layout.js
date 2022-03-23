import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className="main-layout">
        <Header {...this.props}></Header>
        {this.props.children}
        <Footer {...this.props}></Footer>
      </div>
    );
  }
}

export default Layout;
