import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList } from "../components/EventList";
import { Redirect } from "react-router-dom";

class EventPage extends Component {
  state = {
    showNavbar: false,
    date: [{ date: new Date() }],
  };
  async componentDidMount() {
    await this.props.refreshUser(this.props.user._id);
    let dateArray = [];
    for (let i = 0; i < this.props.user.events.length; i++) {
      let event = this.props.user.events[i];
      let newDate = new Date(
        event.date.split("-")[0] +
          ", " +
          event.date.slice("-")[6] +
          ", " +
          event.date.split("-")[2].slice("")[0] +
          event.date.split("-")[2].slice("")[1]
      );
      dateArray.push(newDate);
    }
    // setting the userID state to retrieve contacts
    this.setState({
      events: this.props.user.events,
      date: dateArray,
      showNavbar: true,
    });
  }
  //shows Navbar after user refreshes so data will be current
  showNavbar = () => {
    if (this.state.showNavbar) {
      return (
        <Sidebar
          user={this.props.user}
          handlers={this.props.handlers}
          events={this.props.user.events}
          date={this.state.date}
        />
      );
    }
  };
  render() {
    if (this.props.user.firstName === "George") {
      return <Redirect to={{ pathname: "/landing" }} />;
    } else
      return (
        <div>
          <Container>
            <Row>
              <Col>
                {this.showNavbar()}
                {/* <Sidebar
                  user={this.props.user}
                  handlers={this.props.handlers}
                  events={this.props.user.events}
                  date={this.state.date}
                /> */}
              </Col>
              <Col>
                <EventList
                  user={this.props.user}
                  handlers={this.props.eventHandlers}
                  refreshUser={this.props.refreshUser}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default EventPage;
