import Banner from "@cp/Banner";
import Navigation from "@cp/Navigation";
import Prospects from "@cp/Prospects";
import "./index.scss";

export default function index() {
  
  return (
    <div className="Header">
      <Banner />
      <Navigation />
      <Prospects />
    </div>
  );
}
