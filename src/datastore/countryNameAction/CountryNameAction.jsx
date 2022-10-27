import axios from "axios";
import { GET_COUNTRYNAME } from "../countryNameActionType/CountryNameActionType";

export const get_countryName = async () => {
  const countryDetails = await axios
    .get("https://api.covid19api.com/summary")
    .then((res) => res.data)
    .catch((error) => console.log(error));
  console.log(countryDetails);
  return {
    type: GET_COUNTRYNAME,
    payload: countryDetails,
  };
};
