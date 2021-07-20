import { Svg, useState, useEffect, useRef } from "myact";
import "./index.scss";
export default function Index(props) {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 实时改变的x滑动距离
  const [scrollX, setScrollX] = useState(0);
  // 按压后存储的x滑动距离
  const [currScrollX, setCurrScrollX] = useState(0);
  // 按压后存储的鼠标x坐标
  const [clientX, setClientX] = useState(0);
  // 鼠标按压状态
  const [mouseState, setMouseState] = useState("UP");

  const pageScroll = useRef();
  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
  function onMouseMove(e) {
    if (mouseState === "DOWN") {
      let diff = clientX - e.clientX;
      if (diff >= 0) {
        diff = Math.pow(diff, 3 / 4);
      } else {
        diff = -Math.pow(-diff, 3 / 4);
      }
      setScrollX(currScrollX + diff);
    }
  }
  function onMouseDown(e) {
    setMouseState("DOWN");
    setClientX(e.clientX);
    setCurrScrollX(scrollX);
  }
  function onMouseUp(e) {
    setMouseState("UP");

    // 归位算法
    const style = pageScroll.current.style;
    const translateXStr = style.transform;
    style.transition = "transform 0.2s ease";
    setTimeout(() => {
      style.transition = "";
    }, 200);
    const translateXValue = translateXStr.match(/translateX\((\S*)px/)[1];
    let value = Number(translateXValue);
    let setValue;
    value = -value;

    const mode = value % 20;
    if (value >= 0) {
      if (mode > 10) {
        setValue = value - mode + 20;
      } else {
        setValue = value - mode;
      }
    } else {
      if (mode < -10) {
        setValue = value - mode - 20;
      } else {
        setValue = value - mode;
      }
    }
    if (setValue < -20) {
      setValue = -20;
    } else if (setValue > 140) {
      setValue = 140;
    }
    setScrollX(setValue);
  }

  return (
    <div className="More" onMouseMove={onMouseMove}>
      <div className="last">
        <Svg onClick={props.lastClick} name="left" />
        <Svg onClick={props.lastClick} name="left" />
      </div>

      <div className="page" onMouseDown={onMouseDown}>
        <div
          className="page-scroll"
          ref={pageScroll}
          style={{ transform: `translateX(${-scrollX}px)` }}
        >
          {pages.map((item, index) => (
            <div className="num" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="next">
        <Svg onClick={props.nextClick} name="right" />
        <Svg onClick={props.nextClick} name="right" />
      </div>
    </div>
  );
}
