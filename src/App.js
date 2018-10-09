import React, { Component } from "react";
import "./App.css";

import TrainingCard from "./components/cards/TrainingCard";
import OrganisatinsCard from "./components/cards/OrganisatinsCard";
import MemberCard from "./components/cards/MemberCard";

class App extends Component {
  render() {
    return (
      <div>
        <TrainingCard />
        <OrganisatinsCard />
        <MemberCard />
      </div>
    );
  }
}

export default App;
