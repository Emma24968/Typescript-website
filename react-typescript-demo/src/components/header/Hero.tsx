import colleagueimg from "../../assets/colleague.webp";
export const Hero = () => {
  return (
    <div className="flex mt-[20px] items-center ">
      <div className="w-[450px] h-[620px] ml-[5rem] overflow-hidden rounded-full">
  <img
    src={colleagueimg}
    alt="colleagues"
    className="w-full h-full object-cover"
  />
</div>
      <div className="w-[50%] ml-[7rem]">
        <h3 className="font-[Gestura,sans-serif] text-[68px]  text-white"> <span className=""><i>De-Risking</i></span><br /> Human Progress</h3>
        <p className="text-white font-[Aeonik,sans-serif] text-[20px]">
          With elite insurance expertise empowered by breakthrough technology,
          Newfront is the modern insurance brokerage for the 21st century.
        </p>
      </div>
    </div>
  );
};
