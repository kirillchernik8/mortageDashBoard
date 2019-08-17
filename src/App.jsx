import React from "react";
import dynamic from "next/dynamic";
import axios from "axios";

import UserCard from "./Components/UserCard.jsx";
const Stats = dynamic(() => import("./Components/Stats.jsx"));
import FlipMove from "react-flip-move";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      stats: {},
      renderingUsers: true
    };
    this.getStatistics = this.getStatistics.bind(this);
    this.showStats = this.showStats.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/allUsers")
      .then(res => this.setState({ users: res.data }))
      .then(() => this.getStatistics())
      .catch(err => console.error(err));
  }

  // Getting the data from the api endpint that returns an object with the statistics
  getStatistics() {
    axios
      .get("./api/stats")
      .then(res => this.setState({ stats: res.data }))
      .catch(err => console.error(err));
  }

  // Conditional rendering toggle
  showStats() {
    this.setState(prevState => ({
      renderingUsers: !prevState.renderingUsers
    }));
  }

  render() {
    let renderPage = this.state.renderingUsers ? (
      // Flip Move adds animation to the lisr
      <div>
        <h1 className="mainHeader">Mortage Status Dashboard </h1>
          <button onClick={this.showStats} className="showStats">
            Show Stats
          </button>
        <FlipMove className="UserList">
          {this.state.users ? (
            this.state.users.map(user => {
              return <UserCard user={user} key={user.id} />;
            })
          ) : (
            <h1>Loading ... </h1>
          )}
        </FlipMove>
      </div>
    ) : (
      <Stats stats={this.state.stats} showStats={this.showStats} />
    );

    return <div>{renderPage}</div>;
  }
}

export default App;
