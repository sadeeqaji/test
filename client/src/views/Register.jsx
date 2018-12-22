import React from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      ErroMessage: [],
      SuccessMessage: [],
      serverError: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {name, email, password, password2} = this.state;

    axios.post('/user/register', {name, email, password, password2})
    .then((result) => {
      if(!result.data.success){
        this.setState({ErroMessage: result.data[0].text})
        this.setState({SuccessMessage: []})
      }
      else {
        this.setState({SuccessMessage: "Register successfully. Confirmation code has been send to your email"})
        this.setState({ErroMessage: []})
      }
      
    })
    .catch(error => {
      this.setState({serverError: "Server Error please try after sometime or contact the site Administrator"})
    })
  
  }
  render() {
    const {
      name,
      email,
      password,
      password2
    } = this.state
    return (
      <>
        <div className="container">
          <Row  className="py-5">
          <Col md="7 mx-auto py-5" className="offset-1" >
            <Card className="card-user ">
              
                <CardText className="py-3 px-3">

                  <div className="card-description">
                     <CardBody>
                     <h2 className="text-center"> Register</h2>
                  <Form onSubmit={this.onSubmit}>
                    {this.state.ErroMessage.length > 0 &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { this.state.ErroMessage }
            </div>
          }
          {this.state.SuccessMessage.length > 0 &&
            <div class="alert alert-success alert-dismissible" role="alert">
              { this.state.SuccessMessage }
            </div>
          }
                      <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <Input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Name" 
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <Input 
                          type="email"
                          name="email"
                          value={email}
                          placeholder="mike@email.com"
                          onChange={this.onChange} 
                          />
                        </FormGroup>
                      </Col>
                    <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <Input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <Input
                            type="password"
                            placeholder="Confirm Password" 
                            name="password2"
                            value={password2}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                    <CardFooter>
                  <div className="button-container  py-3">
                    <Button 
                    className="btn-fill" 
                    color="primary" 
                    type="submit"
                    >
                      Sign up
                    </Button>
                  </div>
                  <p>Already have account. Sign in<a href="login"> here</a></p>
                </CardFooter>
                  </Form>
                </CardBody>
                  </div>
                  </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Register;

