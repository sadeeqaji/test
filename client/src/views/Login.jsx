import React from "react";
import axios from "axios";

import {
  getFromStorage,
  setInStorage
} from "../config/storage";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  Cardimage,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      isLoading: true,
      token: '',
      email: '',
      password: '',
      message: [],
      isSignedin: false
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  onSubmit = (e) => {
    e.preventDefault();

    const {email, password} = this.state;

    axios.post('/user/login', { email, password})
    .then((result) => {
      this.setState({message: result.data})
      this.setState({isSignedin: true})
      if(result.request.status === 200) {
        this.props.history.push("/");
      }
      
      //console.log(result.request)
    })
    .catch((err) => {
      console.log(err);
      this.setState({message: "Incorrect Password or email"})
    })
  
  }


  render() { 
    const {
      email,
      password,
    } = this.state
    return (
      <>
        <div className="container">
          <Row className="py-5" >
          <Col md="6" className="offset-1 mx-auto py-5" >
            <Card className="card-user">

                <CardText className="py-3 px-3">
                  <div className="card-description">
                     <CardBody>
                     <h2 className="text-center"> Sign In</h2>
                  <Form onSubmit={this.onSubmit}>
                    {this.state.message.length > 0 &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { this.state.message }
            </div>
          }
                      <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <Input
                            name="email"
                            value={email}
                            placeholder="mike@email.com"
                            type="email"
                            onChange={this.onChange}
                             />
                        </FormGroup>
                      </Col>
                    <Col className="pl-md-1" md="12">
                        <FormGroup>
                          <Input
                            name="password"
                            value={password}
                            placeholder="Password"
                            type="password"
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
                    onClick={this.onSignIn}
                    >
                      Sign in
                    </Button>
                  </div>
                  <p> Don't have Account. Sign up <a href="register"> here </a> </p>
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
