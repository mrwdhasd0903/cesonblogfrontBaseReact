import { useState } from "myact";
import Tag from "@cp/Tag";
import data from "./data.js";
import "./index.scss"
export default function Index(props) {
  const [tagList, setTagList] = useState(data.slice(0,6));
  return (
    <div className="Tags">
      {tagList.map((item, index) => (
        <Tag {...item} key={item.id} />
      ))}
    </div>
  );
}
