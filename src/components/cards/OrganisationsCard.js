import React, { Component } from "react";
import "./organisationsCard.css";
import organisationsCardData from "../../jsonData/organisationsCard.json";

class OrganisationsCard extends Component {
  state = {
    dataOrganisations: organisationsCardData
  };

  render() {
    const { dataOrganisations } = this.state;
    const printOrganisationsData = dataOrganisations.map(organisation => (
      <div key={organisation.id} className="organisationCard">
        <div className="organisationCard__left">
          <img
            src={`${organisation.organisationLogo}`}
            alt={`${organisation.acronym}`}
          />
        </div>

        <div className="organisationCard__center">
          <p>{organisation.acronym}</p>
          <p>{organisation.telephone}</p>
          <p>{organisation.website}</p>
        </div>

        <div className="organisationCard__right">
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

export default OrganisationsCard;
