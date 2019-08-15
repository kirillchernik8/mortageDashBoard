import React from "react";
import LazyLoad from 'react-lazy-load';
import UserCardBack from "./UserCardBack.jsx";
import ReactCardFlip from "react-card-flip";
import { Tooltip } from "reactstrap";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flippedCard: false,
      tooltipShow: false,
      mortageStatus: ""
    };
    this.flipCard = this.flipCard.bind(this);
    this.toggleToolTip = this.toggleToolTip.bind(this);
    this.checkIfCanGetMortage = this.checkIfCanGetMortage.bind(this);
  }

  componentDidMount() {
    this.checkIfCanGetMortage(this.props.user);
  }

  // flip the card to see more information, including the phone number, email, balance etc
  flipCard() {
    this.setState(prevState => ({ flippedCard: !prevState.flippedCard }));
  }

  // toggle the tooltip
  toggleToolTip() {
    this.setState(prevState => ({ tooltipShow: !prevState.tooltipShow }));
  }
  // based on the props value set the status to the className
  checkIfCanGetMortage(user) {
    let decision = "";
    if (user.credit < 600) {
      decision = "unlikely";
    } else if (user.credit > 601 && user.credit < 650) {
      decision = "likely";
    } else {
      decision = "very likely";
    }
    this.setState({ mortageStatus: decision });
  }

  render() {
    return (
      <div className="userCard" onClick={this.flipCard}>
        <ReactCardFlip
          isFlipped={this.state.flippedCard}
          flipDirection="horizontal"
          flipSpeedFrontToBack={0.2}
        >
          <div key="front">
            <div
              className={this.state.mortageStatus.split(" ").join("")}
              id={this.props.user.name_last}
            >
              <Tooltip
                placement="top"
                isOpen={this.state.tooltipShow}
                target={this.props.user.name_last}
                toggle={this.toggleToolTip}
                className="mortageStatus"
              >
                It is {this.state.mortageStatus} that they will get a mortage.
              </Tooltip>
            </div>
            <div className="userName">
              {this.props.user.name_first} <br /> {this.props.user.name_last}
            </div>
            <LazyLoad >
            <img className="userAvatar" alt ={`Image of ${this.props.user.name_first} ${this.props.user.name_last}`}src={this.props.user.picture} />
            </LazyLoad>
          </div>
          <UserCardBack
            user={this.props.user}
            flip={this.flipCard}
            key="back"
          />
        </ReactCardFlip>
      </div>
    );
  }
}

export default UserCard;
