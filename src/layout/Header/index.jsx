import Banner from "@cp/Banner";
import Navigation from "@cp/Navigation";
import Prospects from "@cp/Prospects";
import "./index.scss";

export default function Index(props) {
  return (
    <div className="Header">
      <Banner />
      <Navigation {...props} />
      <Prospects />
    </div>
  );
}
