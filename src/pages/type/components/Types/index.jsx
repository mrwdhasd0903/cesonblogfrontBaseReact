import React, { Svg } from "myact";
import "./index.scss";
import data from "./data";
export default function index() {
  return (
    <div className="TypeTypes">
      {data.map((item) => (
        <div key={item.id} className="type">
          <Svg name={item.icon} />
          <div className="name">{item.name}</div> ×
          <div className="num">{item.blogssize}</div>
        </div>
      ))}
    </div>
  );
}
