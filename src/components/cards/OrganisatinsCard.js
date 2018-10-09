import React, { Component } from "react";
import "./organisatinsCard.css";
import organisatinsCardData from "../../jsonData/organisatinsCard.json";

class OrganisatinsCard extends Component {
  state = {
    dataOrganisations: organisatinsCardData
  };

  render() {
    const { dataOrganisations } = this.state;
    const printOrganisationsData = dataOrganisations.map(organisation => (
      <div key={organisation.id} className="organisatinCard">
        <div className="organisatinCard__left">
          <img
            src={`${organisation.organisationLogo}`}
            alt={`${organisation.acronym}`}
          />
        </div>

        <div className="organisatinCard__center">
          <p>{organisation.acronym}</p>
          <p>{organisation.telephone}</p>
          <p>{organisation.website}</p>
        </div>

        <div className="organisatinCard__right">
          <p>{organisation.city}</p>
          <p>{organisation.country}</p>
          <a className="btn" href="#">
            Send Mail
          </a>
        </div>
      </div>
    ));

    return <div>{printOrganisationsData}</div>;
  }
}

export default OrganisatinsCard;
