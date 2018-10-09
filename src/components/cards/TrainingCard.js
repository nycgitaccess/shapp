import React, { Component } from "react";
import "./trainingCard.css";
import trainingCardData from "../../jsonData/trainingCard.json";

class TrainingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mydata: trainingCardData
    };
  }

  render() {
    const { mydata } = this.state;

    const printData = mydata.map((training, inx) => (
      <div key={training.id} className="trainingCard">
        <div className="trainingCard__left">
          <img src={`${training.logo}`} alt="training logo" />
        </div>

        <div className="trainingCard__center">
          <p>{training.nameTraining}</p>
          <p>{training.descriptionTraining}</p>
          <p>{training.dateTraining}</p>
          <p>
            Eligible Countries :
            {training.eligibleCountries.map(item => {
              return (
                <img
                  key={`${item}`}
                  className="flag"
                  src={`${item}`}
                  alt="flag logo"
                />
              );
            })}
          </p>
        </div>

        <div className="trainingCard__right">
          <p>
            {training.city}, {training.country}
          </p>
        </div>
      </div>
    ));

    return <div>{printData}</div>;
  }
}

export default TrainingCard;
