import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Sidebar from "../components/Sidebar";
import { EventList, EventListItem } from "../components/EventList";
import { Redirect } from "react-router-dom";
import NewEvent from "../components/NewEvent";
import Axios from "axios";

class EventPage extends Component {
  state = {
    date: "",
    title: "",
    contact: [],
  };

  //when we click enter new event, use state as new event and send to db
  enterNewEvent = (x) => {

    x.preventDefault();

    let newEvent = {
      date: this.state.date,
      title: this.state.title,
      contact: this.state.contact,
    };

    Axios.post("api/user/" + this.props.user._id + "/events", newEvent)
      .catch(error => {
        console.log(error.response);
      })
      .then(this.renderEventList());
  };

  //set state as user enters event info
  newEvent = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  //renders list of events
  renderEventList = () => {
    return this.props.user.events.map((event, i) => {
      return (
        <EventListItem
          key={i}
          id={event.id}
          date={event.date}
          title={event.title}
          contact={event.contact.join(", ")}
        />
      );
    });
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
                <Sidebar
                  user={this.props.user}
                  handlers={this.props.handlers}
                />
              </Col>
              <Col>
                <EventList user={this.props.user}>
                  {this.renderEventList()}
                </EventList>
                <br />
                <NewEvent
                  handleNewEvent={this.newEvent}
                  enterNewEvent={this.enterNewEvent}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
  }
}

export default EventPage;