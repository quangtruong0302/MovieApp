import React from "react";
import { currencyFormatter } from "@libs/utils";

const MovieInformation = ({ movieInfo = {} }) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <div className="flex gap-4 items-center">
          {(movieInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/40x30/${countryCode.toLowerCase()}.png`}
              className="w-[1.4vw] mt-1 mr-1"
            ></img>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(movieInfo.budget, "USD")}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(movieInfo.revenue, "USD")}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
