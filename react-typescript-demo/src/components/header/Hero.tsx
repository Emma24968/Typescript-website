import colleagueimg from "../../assets/colleague.webp";
export const Hero = () => {
  return (
    <div className="flex  ">
      <section
        className="h-screen bg-cover w-[500px] bg-center"
        style={{ backgroundImage: `url(${colleagueimg})` }}
      ></section>{" "}
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
