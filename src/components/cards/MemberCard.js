import React, { Component } from "react";
import "./memberCard.css";
import membersCardData from "../../jsonData/membersCard.json";

class MemberCard extends Component {
  state = {
    dataMembers: membersCardData
  };

  render() {
    const { dataMembers } = this.state;
    const printMembers = dataMembers.map(member => (
      <div key={member.id} className="memberCard">
        <div className="memberCard__left">
          <img src={`${member.photo}`} alt={`${member.name}`} />
        </div>

        <div className="organisatinCard__center">
          <p>{member.surname}</p>
          <p>{member.name}</p>
          <p>{member.telephone}</p>
          <p>{member.address.map(address => `${address}, `)}</p>
        </div>

        <div className="memberCard__right">
          <p>{member.organisation}</p>
          <p>{member.position}</p>
          <a className="btn" href="#">
            Send Mail
          </a>
        </div>
      </div>
    ));

    return <div>{printMembers}</div>;
  }
}

export default MemberCard;
