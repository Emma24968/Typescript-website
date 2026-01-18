import { Header } from "./Header";

export const Navigation = () => {
  return (
    <div className="bg-[#202C2F] w-[87%] mt-[25px] container mx-auto flex  gap-15 p-[15px] rounded-[10px] h-[5.5rem] ">
      <Header />
      <div  className="flex gap-6 ml-20 items-center">
        <ul>Business Insurance</ul>
        <ul>Total Rewards</ul>
        <ul>Technology</ul>
        <ul>About</ul>
        <ul>Insights</ul>
      </div>
      <div className="flex gap-8 items-center">
        <ul>Login</ul>
        <button className="bg-white p-2 rounded-[4px]">Talk to an Expert</button>
      </div>
    </div>
  );
};
