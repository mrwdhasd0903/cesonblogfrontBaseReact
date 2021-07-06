import Svg from "@cp/Svg";
import "./index.scss"
export default function Index(props) {
  const { num } = props;
  return (
    <div className="SvgNum">
      {[].map.call(String(num), (char, index) => {
        return <Svg key={index} name={"num_" + char} />;
      })}
    </div>
  );
}
