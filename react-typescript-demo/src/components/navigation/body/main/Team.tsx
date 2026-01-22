import React from "react";
import team from "../../../../assets/TalentxTech.webp";

export const Team = () => {
  return (
    <div className="mt-[5rem] flex">
      <img src={team} alt="" className="w-[30rem]  rounded-3xl" />
      <div className="w-[30%] ">
        <div className="font-semibold text-[13px] font-[aeronik,sans serif]">Empowered Expertise</div>
        <div className="font-[aeronik,sans serif] text-[40px] ">Talent Meets Tech</div>
        <div className="">
          Technology should enhance human expertise, not replace it. By
          equipping our elite insurance talent with tech, we're creating a
          competitive edge for our people and clients. For example:
          <hr />
        </div>
      </div>
    </div>
  );
};
