import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Jumbotron from "../components/Jumbotron/jumbotron";
// import About from "../components/About/about";
// import Footer from "../components/Footer/footer";
import {Row,Col} from "../components/Grid";
import {Card, CardBtn, CardBody,CardContainer,CardHeading,CardImg,CardTitle,CardTitleText}  from "../components/Card";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import axios from "axios";

class Events extends Component {
    state = {
      classifieds: []
    };
  
    componentDidMount() {
      this.loadClassifieds();
    }
  
    loadClassifieds = () => {
      API.getClassifieds()
      .then(res =>
       {this.setState({classifieds:res.data});console.log(res.data)}
      )
      .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
                          <Jumbotron >
  <h4>Listings </h4>
                      
                  </Jumbotron>
  
<List>

{this.state.classifieds.map(classified => (
  <ListItem key={classified._id}      >
<Row>
<Col size="md-12">   
        <div className="card">

          <div className="card-body">
          <h4 >{classified.title}</h4>
          <h5>{classified.user_id}</h5>
          <h5>{classified.price}</h5>
          <p>{classified.description}</p>
          </div>
          </div>

          </Col>
</Row>

</ListItem>))}
</List>


        </div>
      );
    }
  
  }
  
  export default Events;
  