import React, { Component } from "react";
import "./App.css";

import TrainingCard from "./components/cards/TrainingCard";
import OrganisatinsCard from "./components/cards/OrganisatinsCard";
import MemberCard from "./components/cards/MemberCard";
import PageContainer from "./components/pages/PageContainer";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Project</h1>
        <PageContainer />

        <TrainingCard />
        <OrganisatinsCard />
        <MemberCard />
      </div>
    );
  }
}

export default App;
