import { _ } from "react";
import "./index.scss"
export default function Index(props) {
  return (
    <div className="More" onClick={props.moreClick}>
      查看更多
    </div>
  );
}
