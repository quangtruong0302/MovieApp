import React from "react";

const TVShowInformation = ({ tvshowInfor = {} }) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvshowInfor.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <div className="flex gap-4 items-center">
          {(tvshowInfor.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/40x30/${countryCode.toLowerCase()}.png`}
              className="w-[1.4vw]"
            ></img>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvshowInfor.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        <div className="flex gap-4 items-center">
          {(tvshowInfor.networks || []).map((network) => (
            <img
              key={network.id}
              src={`https://image.tmdb.org/t/p/original${network.logo_path}`}
              alt=""
              className="w-[3vw]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVShowInformation;
