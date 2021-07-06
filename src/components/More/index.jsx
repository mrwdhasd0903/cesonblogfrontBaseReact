import { Svg } from "myact";
import SvgNum from "@cp/SvgNum";
import "./index.scss";
export default function Index(props) {
  return (
    <div className="More" >
      <Svg onClick={props.lastClick} name="left" />
      <SvgNum num="123" />
      <Svg onClick={props.nextClick} name="right" />
    </div>
  );
}
