import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardImg,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Row className="py-5">
            <Col md="10 mx-auto py-5">
              <Card className="p-5">
                <CardHeader>
                  <h2 className="display-2">The Best of Hausa Movies</h2>
                </CardHeader>
                <CardText><p className="display-5">Watch thousands of Hausa movies and series on all your devices without paying more</p></CardText>
                <CardFooter><a href="register">
                  <Button className="btn-fill" color="primary">
                     Start Watching 
                  </Button></a>
                </CardFooter>
              </Card>
            </Col>   
          </Row> 

          <Row >
          <Col md="5 " className="offset-1" >
            <Card className="card-user">
              <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                <CardText className="py-3 px-3">
                  <div className="card-description">
                   <p> Unlimited entertainment, one low price Stream and download as much as you want, no extra fees.</p>
                  </div>
                  </CardText>
                <CardFooter>
                  <div className="button-container  py-3"><a href="register">
                    <Button className="btn-fill " color="primary" >
                      Watch all 
                    </Button></a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="5">
             <Card className="card-user">
              <CardImg top src={require("assets/img/now1.jpg")}></CardImg>
                <CardText className="py-3 px-3">
                  <div className="card-description">
                      New movie alerts and streams beyond what you imagine. Be the first to know every update,stay ahead of your peers 
                    </div>
                  </CardText>
                <CardFooter>
                  <div className="button-container py-3 "><a href="register">
                    <Button className="btn-fill " color="primary" type="submit">
                      Sign Up
                    </Button> </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>  
          </Row>
        </div>
      </>
    );
  }
}

export default Landing;

