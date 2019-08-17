import React from "react";
import UserCardBack from "./UserCardBack.jsx";
import { Tooltip } from "reactstrap";
import LazyLoad from "react-lazyload";

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
      <div
        className={`flip ${
          !this.state.flippedCard ? "flip--front" : "flip--back"
        } `}
        onClick={this.flipCard}
      >
        <div key="front" className="flip__front">
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
          <LazyLoad once>
            <img
              className="userAvatar"
              alt={`Image of ${this.props.user.name_first} ${
                this.props.user.name_last
              }`}
              src={this.props.user.picture}
            />
          </LazyLoad>
        </div>
        <div className="flip__back">
          <UserCardBack
            user={this.props.user}
            flip={this.flipCard}
            key="back"
          />
        </div>
      </div>
    );
  }
}

export default UserCard;
