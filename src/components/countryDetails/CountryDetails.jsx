import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_countryName } from "./../../datastore/countryNameAction/CountryNameAction";
import { Row, Col, Card } from "antd";
import moment from "moment";

const CountryDetails = () => {
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
    <>
      <Row
        style={{ marginTop: "80px" }}
        justify="center"
        gutter={[{ md: 8, lg: 8 }, 24]}
      >
        {countryDetails?.map((data) => (
          <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
            <Card title="Country Details" bordered={true}>
              <p>Country Name : {data?.Country}</p>
              <p>NewConfirmed : {data?.NewConfirmed}</p>
              <p>TotalConfirmed: {data?.TotalConfirmed}</p>
              <p>NewDeaths : {data?.NewDeaths}</p>
              <p>TotalDeaths : {data?.TotalDeaths}</p>
              <p>NewRecovered : {data?.NewRecovered}</p>
              <p>TotalRecovered :{data?.TotalRecovered}</p>
              <p>
                Date: {moment(data?.Date).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CountryDetails;
