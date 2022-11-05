import React from "react";

function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6> {props.ranking} </h6>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.distributor}</p>
          <b> {props.year} </b>
          <b> {props.distributor}</b>
          <h6>{props.amount} </h6>
        </div>
      </div>
    </>
  );
}

export default Card;
