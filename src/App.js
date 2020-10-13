import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import mapboxgl from "mapbox-gl";
debugger;
const { REACT_APP_MAPBOX_CODE } = process.env;
mapboxgl.accessToken = REACT_APP_MAPBOX_CODE;

class App extends Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
      lng: 67.0011,
      lat: 24.8609,
      zoom: 14,
    };
  }

  getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  setPosition = (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    const zoom = 15;
    console.log("Latitude: " + latitude + " Longitude: " + longitude);
    console.log(`More or less ${accuracy} meters.`);

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [longitude, latitude],
      zoom: zoom,
    });
    this.setState({
      latitude,
      longitude,
      zoom,
    });
  };
  async componentDidMount() {
    await this.getCurrentLocation();
  }
  render() {
    return (
      <Container className="App" fluid>
        <Header></Header>
        <Row>
          <Col
            ref={(el) => (this.mapContainer = el)}
            className="mapContainer"
          />
        </Row>
      </Container>
    );
  }
}

export default App;
