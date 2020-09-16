import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      isOnline: false,
      profilePics: [],
    };
  }

  handleChange = (e) => {
    this.setState({ notifications: [] });
  };

  //   handleSwitch = () => {
  //     this.setState({ isOnline: !this.state.isOnline });
  //     this.handleNotifications();
  //   };

  //   handleNotifications = () => {
  //     let notification = "You're offline";
  //     this.setState({
  //       notifications: [...this.state.notifications, notification],
  //     });
  //   };

  //   componentDidMount() {
  //     this.fetchData();
  //   }

  //   fetchData() {
  //     fetch("https://randomuser.me/api?results=8")
  //       .then((response) => response.json())
  //       .then((parsedJSON) =>
  //         parsedJSON.results.map((user) => `${user.picture.thumbnail}`)
  //       )
  //       .then((profilePics) =>
  //         this.setState({
  //           profilePics,
  //         })
  //       )
  //       .catch((error) => console.log("parsing failed", error));
  //   }

  render() {
    return (
      <div className="container">
        <div className="onlineCard"></div>
        <div className="volumeCard"></div>
        <div className="audioCard"></div>
        <div className="pic"></div>
        <div className="pic2"></div>
        <div className="friends"></div>
      </div>
    );
  }
}

export default Dashboard;
