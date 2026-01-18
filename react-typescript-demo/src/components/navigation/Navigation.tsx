import { Header } from "./Header";

export const Navigation = () => {
  return (
    <div className="bg-[#202C2F] w-[87%] container mx-auto flex  gap-35 ">
      <Header />
      <div  className="flex gap-10 ml-20">
        <ul>Business Insurance</ul>
        <ul>Total Rewards</ul>
        <ul>Technology</ul>
        <ul>About</ul>
        <ul>Insights</ul>
      </div>
      <div className="flex gap-8">
        <ul>Login</ul>
        <button>Talk to an Expert</button>
      </div>
    </div>
  );
};
