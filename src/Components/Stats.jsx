import React from "react";
import PieChart from "react-minimal-pie-chart";

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="chartForCreditScore">
          <h1> Credit scores: </h1>
          <div className="labels">
            <h5>Green-Optimal </h5>
            <h5>Aqua-Medium </h5>
            <h5>Orange-Low </h5>
          </div>
          <PieChart
            animate={true}
            animationDuration={1000}
            data={[
              {
                title: "Good Chance",
                value: this.props.stats.credit.good,
                color: "green"
              },
              {
                title: "Likely",
                value: this.props.stats.credit.med,
                color: "aquamarine"
              },
              {
                title: "Unlikely",
                value: this.props.stats.credit.min,
                color: "orange"
              }
            ]}
          />
        </div>

        <div className="chartForBalance">
          <h1> Balances: </h1>
          <div className="labels">
          <h5>Green-Optimal </h5>
          <h5>Aqua-Medium </h5>
          <h5>Orange-Low </h5>
          </div>
          <PieChart
            animate={true}
            animationDuration={1000}
            data={[
              {
                title: "High",
                value: this.props.stats.balance.high,
                color: "green"
              },
              {
                title: "Med",
                value: this.props.stats.balance.med,
                color: "aquamarine"
              },
              {
                title: "Low",
                value: this.props.stats.balance.low,
                color: "orange"
              }
            ]}
          />
        </div>
        <button onClick={this.props.showStats} className="showUsers">
          {" "}
          Show Users{" "}
        </button>
      </div>
    );
  }
}

export default Stats;
