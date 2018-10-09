import React, { Component } from "react";
import "./App.css";




// Until the pages are created, the PageContainer is linked here.
// It needs then to be moved into the Routes.
import PageContainer from './components/pages/PageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Project</h1>
        <PageContainer />
      </div>
    );
  }
}

export default App;
