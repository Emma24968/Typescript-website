import { Header } from "./Header";

export const Navigation = () => {
  return (
    <div className="bg-[#202C2F] w-[87%] mt-[25px] container mx-auto flex  gap-15 p-[15px] rounded-[10px] h-[5.5rem] ">
      <Header />
      <ul className="flex gap-6 ml-20 text-[#FAFAFA] text-[15px] font-normal leading-normal text-white font-[Times New Roman,sans-serif] items-center">
        <li>Business Insurance</li>
        <li>Total Rewards</li>
        <li>Technology</li>
        <li>About</li>
        <li>Insights</li>
      </ul>
      <div className="flex gap-8 items-center">
        <ul>Login</ul>
        <button className="bg-white p-2 rounded-[4px]">
          Talk to an Expert
        </button>
      </div>
    </div>
  );
};
