import React, {Component} from 'react';
import {Col, Row} from "antd";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>col</Col>
          <Col span={8} offset={8}>col</Col>
        </Row>
      </div>
    );
  }
}

export default App;
