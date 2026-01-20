import colleagueimg from "../../assets/colleague.webp";
export const Hero = () => {
  return (
    <div className="flex mt-[20px] ">
      <div className="w-[450px] h-[620px] ml-[5rem] overflow-hidden rounded-full">
  <img
    src={colleagueimg}
    alt="colleagues"
    className="w-full h-full object-cover"
  />
</div>
      <div className="w-[50%]">
        <h3 className="">De-Risking Human Progress</h3>
        <p>
          With elite insurance expertise empowered by breakthrough technology,
          Newfront is the modern insurance brokerage for the 21st century.
        </p>
      </div>
    </div>
  );
};
