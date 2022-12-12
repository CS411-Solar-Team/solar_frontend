import { Card } from "antd";
import { Tabs } from "antd";
import React from "react";
import NewPackagePage from './components/NewPackagePage';
import MyOrders from "./components/MyOrders";
import tesla from "./image/tesla_solar_login.jpg"

 


class OrderMainPage extends React.Component{
  render(){

    // const { Header, Content } = Layout;
    const { TabPane } = Tabs;

    function callback(key) {

      console.log('tab: ',key);

    }

    return (
       <Card bordered={false}
       style={{backgroundImage:`url(${tesla})`, height:"calc(100%)", overflow: "auto"}}
      >
         <Tabs  tabBarStyle={{color:"white", fontWeight:500}} defaultActiveKey="1" onChange={callback}>
            <TabPane  tab="Order" key="1">
               <NewPackagePage/>
            </TabPane>
            <TabPane  tab="Company" key="2">
               <MyOrders />
            </TabPane>
          </Tabs>
       </Card>
    );
  }
  
}

export default OrderMainPage;
