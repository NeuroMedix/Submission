import React from "react";
import Compondimg from "../../assets/images/ZINC000000001347.png";
import './Result.scss'
function Result({MolWeight, LogP, QED}) {
  return (
    <>
      <div className="image__container">
        <img
          className="image"
          src={Compondimg}
          alt="This is an image of a generated SMILES compound"
        />
        <div className="image__details">
          <ul className="image__details-list">
            <li className="image__details-items">
            Molecular Weight: {MolWeight}
            </li>
            <li>
            LogP: {LogP}
            </li>
            <li> QED : {QED}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Result;
