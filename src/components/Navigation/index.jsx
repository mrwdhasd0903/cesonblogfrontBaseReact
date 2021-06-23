// import { useState } from "myact";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState, useEffect, useRef, Svg } from "myact";
export default function Index(props) {
  const navs = [
    { name: "首页", link: "/home" },
    { name: "分类", link: "/type" },
    { name: "标签", link: "/tag" },
    { name: "归档", link: "/archive" },
    { name: "关于小王", link: "/about" },
    { name: "流量统计", link: "/traffic" },
    { name: "友情链接", link: "/link" },
  ];
  const [hoverStyle, setHoverStyle] = useState({ left: "0px", width: "0px" });
  const [focus, seFocus] = useState(false);
  const [fixed, seFixed] = useState(false);
  const input = useRef(null);
  const linkFix = "nav-";

  useEffect(() => {
    linkRecover();
    window.addEventListener("scroll", seFixedBind);
    return () => {
      window.removeEventListener("scroll", seFixedBind);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function seFixedBind() {
    seFixed(window.scrollY > 180);
  }
  /**
   * hover 移动
   * @param {*} e
   */
  function linkEnter(e) {
    const { offsetLeft, offsetWidth } = e.target;
    setHoverStyle({
      left: offsetLeft + "px",
      width: offsetWidth + "px",
    });
  }
  /**
   * hover归位
   */
  function linkRecover() {
    const { pathname } = props.location;
    const currLinkDoms = document.getElementsByClassName(linkFix + pathname);
    if (currLinkDoms.length) {
      const currLinkDom = currLinkDoms[0];
      const { offsetLeft, offsetWidth } = currLinkDom;
      setHoverStyle({
        left: offsetLeft + "px",
        width: offsetWidth + "px",
      });
    }
  }
  /**
   * 点击搜索栏
   */
  function inputFocus(e) {
    input.current.focus();
    seFocus(true);
  }
  /**
   *输入框取消输入
   * @param {*} e
   */
  function inputBlur() {
    if (input.current.value) return;
    seFocus(false);
  }
  /**
   * 阻止冒泡
   */
  function stopPropagation(e) {
    e.stopPropagation();
  }
  /**
   *
   * @param {*} e
   */
  function enterKeyUp(e) {
    if (e.key === "Enter") search(e);
  }
  /**
   * 开始搜索
   */
  function search(e) {
    e.stopPropagation();
    if (input.current.value) {
      alert(input.current.value);
    } else {
      input.current.focus();
      seFocus(true);
    }
  }
  return (
    <div
      className={"Navigation " + (fixed ? "fixed" : "")}
      onMouseLeave={linkRecover}
    >
      {navs.map((item) => {
        return (
          <Link
            onMouseEnter={linkEnter}
            className={"item " + linkFix + item.link}
            to={item.link}
            key={item.name}
          >
            {item.name}
          </Link>
        );
      })}
      <div className="hover" style={hoverStyle} />
      <div onClick={inputFocus} className="search" onMouseEnter={linkEnter}>
        <input
          onKeyUp={enterKeyUp}
          onClick={stopPropagation}
          onBlur={inputBlur}
          className={focus ? "focus" : ""}
          type="text"
          ref={input}
        />
        <div onClick={search} className={"svg" + (focus ? " svg-focus" : "")}>
          <div />
        </div>
      </div>
      <div className="github" onMouseEnter={linkEnter}>
        <button>
          <Svg name="star" />
          <span>Star</span>
        </button>
        <div className="logo">
          <Svg name="github" />
        </div>
      </div>
    </div>
  );
}
