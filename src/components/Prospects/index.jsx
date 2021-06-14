import "./index.scss";
import { useRef } from "myact";
export default function Index() {
  const ISRef = useRef(null);
  function move(e) {
    ISRef.current.style.transition = "";
    const poor = e.pageX - window.innerWidth / 2;
    let res;
    if (poor > 0) {
      res = Math.sqrt(poor);
    } else {
      res = -Math.sqrt(-poor);
    }
    ISRef.current.style.transform = `translateX(${res}px)`;
  }
  function leave() {
    ISRef.current.style.transition = "transform .1s";
    ISRef.current.style.transform = "";
  }
  const IS = "/image/individuality-signature.png";
  const HS = "/image/handwritten-signature.png";
  return (
    <div className="Prospects" onMouseMove={move} onMouseLeave={leave}>
      <img className="IS" ref={ISRef} src={IS} alt="唯有时间对我们一视同仁" />
      <img className="HS" src={HS} alt="codemeow" />
    </div>
  );
}
