import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Legue You",
        bio: "Développeur Full Stack passionné par React",
        imgSrc: "/assets/jeune.avif ",
        profession: "Développeur Web",
      },
      show: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="App ">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {this.state.show ? "Masquer le profil" : "Afficher le profil"}
        </button>
        {this.state.show && (
          <div className="profile">
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h3>{this.state.person.profession}</h3>
        </div>
        )}
        <p>Temps écoulé depuis le montage : {this.state.mountedTime} secondes</p>
    </div>
    );
}
}

export default App;
