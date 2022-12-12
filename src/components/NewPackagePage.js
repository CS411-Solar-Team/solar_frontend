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
import {uploadPackage, succeed} from "../utils";
 
 
class NewPackagePage extends React.Component {
  // formRef = React.createRef();
    state = {
      // authed: false,
      loading: false,
    };

    handleSubmit = async (query) => {
      this.setState({
        loading: true,
      });
   
      try {

        const res = await uploadPackage(query);
        message.success("Submit Successfully");
        //const name = JSON.stringify(res.receiver_name);
        Modal.success({
          title: 'What are you waiting for?',
          // content: JSON.stringify(res),
          // content: JSON.stringify({ Name: res.receiver_name, 
          //   DeliveryTime: res.delivery_time, Price: res.total_price, toJSON()
          //   {return "Receiver Name: " + this.Name + " Delivery Time: " + 
          //   this.DeliveryTime + " " + " Price: $" + this.Price}}, null, '\t'),
          content: JSON.stringify({ Saving: res.saving, 
            C_name: res.companies[0].company_name,C_address: res.companies[0].company_address,C_website: res.companies[0].company_website, C_phone: res.companies[0].company_phone_number, C_rating: res.companies[0].company_rating, C2: res.companies[1], C3: res.companies[2], Price: res.total_price, toJSON()
            { 
              return "You can save $" + this.Saving + " over 25 years by switching to solar energy!" + "       " + " The best recommended solar companies near you is " + 
            this.C_name + ". Their address is " + this.C_address + ". You can visit their website by " + this.C_website + " or make a call to " + this.C_phone + ". Their rating at Google Map is "+ this.C_rating + "."
          }}, null, '\t'),
          okText: "Ok",
          onOk: () => {
            succeed(res);
          },
        });
        //calling back succeed request to backend
        // if(res){
        //   await succeed(res);
        //   //reset();
        // }
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
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      
      const { Option } = Select;
  
      function onChange(date, dateString) {
        console.log(date, dateString);
      }

  
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

          <Form {...layout} className="OrderInfo" onFinish={this.handleSubmit} validateMessages={validateMessages} labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} >

            <p className="FormText">Where is your home?</p>
            <Form.Item name='address' label="Address" rules={[{ required: true }]}>
                <Input/>
               
            </Form.Item>
  
            <p className="FormText">How much do you spend on electricity a month?</p>

            <Form.Item  name="bill" label="Bill" rules={[{ required: true }]}>

              <Input />
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
   
//const NewPackagePage = Form.create({name:'newOederInfo'})(NewOrderForm) 
export default NewPackagePage;
