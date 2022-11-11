import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Divider,
  DatePicker,
  message,
  Card,
  Modal,
} from 'antd';
import {uploadAddress} from "../utils";
 
 
class CompanyList extends React.Component {
    state = {
      // authed: false,
      loading: false,
    };

    handleSubmit = async (query) => {
      this.setState({
        loading: true,
      });
   
      try {

        const res = await uploadAddress(query);
        message.success("Submit Successfully");
        //const name = JSON.stringify(res.receiver_name);
        Modal.success({
          title: 'Your address is valid!',
          content: JSON.stringify(res, null, 4),
        });

      } catch (error) {
        message.error(error.message);
      } finally {
        this.setState({
          loading: false,
        });
      }
    };

    //  printOut = (data) => {
    //    'Receiver name: ', data.receiver_name;
    //  };
 
 
    render() {
      const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      const { Option } = Select;
  
      const prefixSelector = (
        <Form.Item name='prefix' noStyle>
          <Select style={{ width: 70 }}>
            <Option value="1">+1</Option>
            <Option value="86">+86</Option>
          </Select>
        </Form.Item>
      );

      return (
        <Card className="OrderCard">

          <Form {...layout} className="OrderInfo" onFinish={this.handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} >

            <p className="FormText">Home Address</p>
          
            <Form.Item name='homeaddress' label="Address" rules={[{ required: true }]}>
                <Input/>
               
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>

              <Button type="primary" htmlType="submit" disabled={this.state.loading} >
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Card>
      );
    };
  }
   
export default CompanyList;
