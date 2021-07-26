import { Svg, useState, useEffect, useRef } from "myact";
import "./index.scss";
export default function Index(props) {
  const { pageData, pageChange } = props;
  const mode = pageData.total % pageData.size;
  const pageSize = (pageData.total - mode) / pageData.size + (mode ? 1 : 0);

  // 实时改变的x滑动距离
  const [scrollX, setScrollX] = useState(pageData.curr * 40 - 120);
  // 按压后存储的x滑动距离
  const [currScrollX, setCurrScrollX] = useState(0);
  // 按压后存储的鼠标x坐标
  const [clientX, setClientX] = useState(0);
  // 鼠标按压状态
  const [mouseState, setMouseState] = useState("UP");

  const pageScroll = useRef();
  useEffect(() => {
    setScrollX(pageData.curr * 40 - 120);
  }, [pageData]);
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
        diff = Math.pow(diff, 5 / 6);
      } else {
        diff = -Math.pow(-diff, 5 / 6);
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

    const mode = value % 40;
    if (value >= 0) {
      if (mode > 20) {
        setValue = value - mode + 40;
      } else {
        setValue = value - mode;
      }
    } else {
      if (mode < -20) {
        setValue = value - mode - 40;
      } else {
        setValue = value - mode;
      }
    }
    if (setValue < -120) {
      setValue = -120;
    } else if (setValue > (pageSize - 3) * 40) {
      setValue = (pageSize - 3) * 40;
    }
    pageChange(setValue / 40 + 3);
  }
  function lastPage() {
    if (pageData.curr === 1) return;
    pageChange(pageData.curr - 1);
  }
  function nextPage() {
    if (pageData.curr === pageSize) return;
    pageChange(pageData.curr + 1);
  }
  function jumpPage(page) {
    pageChange(page);
  }

  return (
    <div className="More" onMouseMove={onMouseMove}>
      <div className="last" onClick={lastPage}>
        <Svg name="left" />
        <Svg name="left" />
      </div>

      <div className="page" onMouseDown={onMouseDown}>
        <div
          className="page-scroll"
          ref={pageScroll}
          style={{ transform: `translateX(${-scrollX}px)` }}
        >
          {new Array(pageSize).fill(0).map((item, index) => (
            <div
              className={"num " + (pageData.curr === index + 1 ? "curr" : "")}
              key={index}
              onClick={jumpPage.bind(this, index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="next" onClick={nextPage}>
        <Svg name="right" />
        <Svg name="right" />
      </div>
    </div>
  );
}
