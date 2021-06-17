import React from "react";
import "./index.scss";
export default function Index() {
  const avatar = "/image/avatar.jpg";
  const avatar2 = "/image/avatar-2.jpg";

  return (
    <div className="Profile">
      <div
        className="image2"
        style={{
          backgroundImage: `url(${avatar2})`,
        }}
      ></div>
      <div
        className="image"
        style={{
          backgroundImage: `url(${avatar})`,
        }}
      ></div>
      <div className="name">CODEMEOW</div>
      <div className="hr"></div>
      <div className="text">海阔凭鱼跃</div>
    </div>
  );
}
