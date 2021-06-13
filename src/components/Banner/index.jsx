import  { useState } from "myact";
import "./index.scss";
export default function Index() {
  const [bg] = useState(
    "/image/banner-bg.jpg"
  );

  return (
    <div
      className="Banner"
      style={{
        background: `url(${bg})`,
      }}
    >
    </div>
  );
}
