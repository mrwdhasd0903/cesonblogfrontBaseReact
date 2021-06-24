import { useState, useEffect, Svg } from "myact";
import "./index.scss";
export default function Index() {
  const [showGoTop, seShowGoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", showGoTopValue);
    return () => {
      window.removeEventListener("scroll", showGoTopValue);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function showGoTopValue() {
    seShowGoTop(window.scrollY > 180);
  }
  function scrollTop() {
    const _d = document.scrollingElement;
    // 总高度
    const H = _d.scrollTop;
    // 滚动总时间
    const T = 2;
    // 计算
    const a = (-6 * H) / Math.pow(T, 3);
    // 当前时间
    let currTime = 0;
    function timing() {
      const v = a * currTime * (currTime - T);
      setTimeout(() => {
        currTime += 0.001;
        _d.scrollTop -= v;
        if (_d.scrollTop > 0) {
          timing();
        }
      }, 1);
    }
    timing();
  }

  return (
    <div className="Tools">
      <div
        onClick={scrollTop}
        className={"go_top" + (showGoTop ? " show" : "")}
      >
        <Svg name="arrow" />
        <div className="text">TOP</div>
      </div>
    </div>
  );
}
