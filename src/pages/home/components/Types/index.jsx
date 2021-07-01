import data from "./data";
import { useState, Svg } from "myact";
export default function Index() {
  const [typeList, setTypeList] = useState(data);
  return (
    <div className="Types">
      {typeList.map((item) => (
        <div className="type">
          <div>{item.name}</div>
          <div>{item.blogssize}</div>
          <Svg name={item.icon} />
        </div>
      ))}
    </div>
  );
}
