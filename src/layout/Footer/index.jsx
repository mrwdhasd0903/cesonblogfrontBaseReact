import { useState } from "myact";
import "./index.scss";
export default function Index() {
  const [bg] = useState("/image/banner-bg2.jpg");
  return (
    <div className="Footer">
      <div
        className="back"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="modal"></div>
      <div className="front"></div>
    </div>
  );
}
