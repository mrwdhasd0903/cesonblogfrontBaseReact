import React, { useState } from "myact";
import "./index.scss";
export default function Index() {
  const [bg] = useState(
    "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  );

  return (
    <div
      className="Banner"
      style={{
        background: `url(${bg})`,
      }}
    >
      Banner
    </div>
  );
}
