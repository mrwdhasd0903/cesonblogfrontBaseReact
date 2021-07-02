import data from "./data";
import { useState, Svg } from "myact";
import "./index.scss";
export default function Index() {
  const [typeList, setTypeList] = useState(data);
  return (
    <div className="Types">
      {typeList.map((item) => (
        <div className="type" key={item.id}>
          <div className="svg">
            <Svg name={item.icon} />
            <div className="num">{item.blogssize}</div>
          </div>
          <div className="name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
