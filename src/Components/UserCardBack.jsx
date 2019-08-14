import React from "react";

class UserCardBack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.flip} className="AccountCardBack">
        <br />
        <span>
          <span className="backCardTitles">
            Employer: <br />
          </span>
          {this.props.user.employer}
        </span>
        <br />
        <span>
          <span className="backCardTitles">
            Email: <br />
          </span>
          {this.props.user.email}
        </span>
        <br />
        <span>
          <span className="backCardTitles">
            Phone:
            <br />
          </span>
          {this.props.user.phone}
        </span>
        <br />
        <span>
          
          <span className="backCardTitles">
            Credit Score:
            <br />
          </span>
          {this.props.user.credit}
        </span>
        <br />
        <span>
          
          <span className="backCardTitles">
            Current Balance:
            <br />
          </span>
          {this.props.user.balance}
        </span>
      </div>
    );
  }
}

export default UserCardBack;
