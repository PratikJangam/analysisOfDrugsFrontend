import React from "react";
import { useLocation } from "react-router-dom";

import "./middleSection.css";

const userData = [
  {
    id: "/cymbalta",
    _45_54: "1291",
    _55_64: "1008",
    _35_44: "874",
    _25_34: "594",
    _65_74: "400",
    _19_24: "225",
    _75orAbove: "102",
    _13_18: "34",
    female: "3621",
    male: "830",
  },
  {
    id: "/lisinopril",
    _45_54: "80043",
    _55_64: "75136",
    _35_44: "55011",
    _25_34: "49718",
    _65_74: "41216",
    _19_24: "24230",
    _75orAbove: "15226",
    _13_18: "7045",
    female: "2383",
    male: "1639",
  },
  {
    id: "/lexapro",
    _45_54: "80043",
    _55_64: "75136",
    _35_44: "55011",
    _25_34: "49718",
    _65_74: "41216",
    _19_24: "24230",
    _75orAbove: "15226",
    _13_18: "7045",
    female: "2383",
    male: "1639",
  },
  {
    id: "/effexor",
    _45_54: "80043",
    _55_64: "75136",
    _35_44: "55011",
    _25_34: "49718",
    _65_74: "41216",
    _19_24: "24230",
    _75orAbove: "15226",
    _13_18: "7045",
    female: "2383",
    male: "1639",
  },
  {
    id: "/lyrica",
    _45_54: "80043",
    _55_64: "75136",
    _35_44: "55011",
    _25_34: "49718",
    _65_74: "41216",
    _19_24: "24230",
    _75orAbove: "15226",
    _13_18: "7045",
    female: "2383",
    male: "1639",
  },
];

const MiddleSection = () => {
  const location = useLocation();
  const url1 = location.pathname;

  let newArray = userData.filter(function (el) {
    return el.id === url1;
  });

  console.log(newArray);
  return (
    <>
      <div className="middle_section">
        <div className="age">
          <h2>According to Age group</h2>
          <p>
            45-54 <span>{newArray[0]._45_54}</span>
          </p>
          <p>
            55-64 <span>{newArray[0]._55_64}</span>
          </p>
          <p>
            35-44 <span>{newArray[0]._35_44}</span>
          </p>
          <p>
            25-34 <span>{newArray[0]._25_34}</span>
          </p>
          <p>
            65-74 <span>{newArray[0]._65_74}</span>
          </p>
          <p>
            19-24 <span>{newArray[0]._19_24}</span>
          </p>
          <p>
            75 or over <span>{newArray[0]._75orAbove}</span>
          </p>
          <p>
            13-18 <span>{newArray[0]._13_18}</span>
          </p>
        </div>
        <div className="left_section">
          <p>
            Consumption of Cymbalta drug with respect to Age group and gender.
          </p>
          <div className="sex">
            <h2>According to gender</h2>
            <p>
              Female <span>{newArray[0].female}</span>
            </p>
            <p>
              Male <span>{newArray[0].male}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
