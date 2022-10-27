import React, { useEffect } from "react";
import WorldMap from "react-svg-worldmap";
import { useDispatch, useSelector } from "react-redux";
import { get_countryName } from "../datastore/countryNameAction/CountryNameAction";
const CountryMap = () => {
  const countryDetails = useSelector(
    (data) => data?.countryDetailsList?.countryNameDetails?.Countries
  );
  const dispatch = useDispatch();
  let countryInfo = async () => {
    dispatch(await get_countryName());
  };

  useEffect(() => {
    countryInfo();
  }, []);
  console.log(countryDetails);
  return (
    <div>
      {/* <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="lg"
        data={countryDetails}
      /> */}
    </div>
  );
};

export default CountryMap;
