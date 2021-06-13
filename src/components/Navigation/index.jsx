// import { useState } from "myact";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState, useEffect, Svg } from "myact";
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
  const linkFix = "nav-";

  useEffect(() => {
    linkRecover();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    console.log(pathname);
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
  return (
    <div className="Navigation" onMouseLeave={linkRecover}>
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
      <div className="search" onMouseEnter={linkEnter}>
        <input type="text" />
        <div className="svg">
          <Svg name="search" />
        </div>
      </div>
    </div>
  );
}
