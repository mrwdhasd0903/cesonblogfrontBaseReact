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
    const T = 100;
    // 计算
    const a = (-6 * H) / Math.pow(T, 3);
    // 当前时间
    let currTime = 0;
    let Interval = setInterval(() => {
      const v = a * currTime * (currTime - T);
      _d.scrollTop -= v;
      if (_d.scrollTop <= 0 || v < 0) {
        clearInterval(Interval);
      }
      currTime += 1;
    }, 1);
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
