import { GET_COUNTRYNAME } from "../countryNameActionType/CountryNameActionType";

const countryNameDetailsData = {
  countryNameDetails: [],
};

export const countryDetails = (state = countryNameDetailsData, action) => {
  switch (action.type) {
    case GET_COUNTRYNAME:
      return { ...state, countryNameDetails: action.payload };

    default:
      return state;
  }
};
