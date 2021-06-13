// import { useState } from "myact";
import { Link } from "react-router-dom";
export default function index() {
  const navs = [
    { name: "首页", link: "/home" },
    { name: "分类", link: "/type" },
    { name: "标签", link: "/tag" },
    { name: "归档", link: "/archive" },
    { name: "关于小王", link: "/about" },
    { name: "流量统计", link: "/traffic" },
    { name: "友情链接", link: "/link" },
  ];

  return (
    <div className="Navigation">
      {navs.map((item) => {
        return (
          <Link to={item.link} key={item.name}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
