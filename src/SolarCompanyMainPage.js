import { Layout, Dropdown, Menu, Button, Card, Row } from "antd";
import { Tabs } from "antd";
import React from "react";

import CompanyList from './components/CompanyList';


class SolarCompanyMainPage extends React.Component{
  render(){

    const { Header, Content } = Layout;
    const { TabPane } = Tabs;

    function callback(key) {

      console.log('tab: ',key);

    }

    return (
      // <Layout style={{ height: "100vh" }}>
       <Card bordered={false}
       style={{height:"calc(100%)", overflow: "auto"}}
      >
         <Tabs  tabBarStyle={{color:"black", fontWeight:500}} defaultActiveKey="1" onChange={callback}>
            <TabPane  tab="Company" key="1">
               <CompanyList/>;
            </TabPane>
          </Tabs>
       </Card>
    // </Layout>

    );
  }
  
}

export default SolarCompanyMainPage;
