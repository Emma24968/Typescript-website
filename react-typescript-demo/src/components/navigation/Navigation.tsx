import { Header } from "./Header"

export const Navigation = () => {
  return (
    <div className="bg-[#202C2F] ">
        <Header />
        <ul>Business Insurance</ul>
        <ul>Total Rewards</ul>
        <ul>Technology</ul>
        <ul>About</ul>
        <ul>Insights</ul>
        <div className="div">
            <ul>Login</ul>
            <button>Talk to an Expert</button>
        </div>
    </div>
  );
};
