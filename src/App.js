import logo from './logo.svg';
import './App.css';
import SolarCompanyMainPage from "./SolarCompanyMainPage";
import React from "react";
import { Layout, Dropdown, Menu, Button } from "antd";

const { Header, Content } = Layout;


class App extends React.Component {
  renderContent = () => {

    return <SolarCompanyMainPage />;
    
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header style={{ display: "solar", justifyContent: "space-between" }}>
          <div className="TitleText" style={{ fontSize: 36, fontWeight: 500 }}>
            Solar
          </div>

        </Header>
        <Content
          style={{height: "calc(100% - 64px)", overflow: "auto" }}
        >
          {this.renderContent()}
        </Content>
      </Layout>
    );
  }
}

export default App;
