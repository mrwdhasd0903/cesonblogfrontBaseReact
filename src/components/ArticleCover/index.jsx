import React, { useMemo, Svg, createRef, useEffect, useState } from "myact";
import "./index.scss";
import { changeDateFormat, formatDistance } from "@u/changeDateFormat";
const OFFSET = 80;

export default function Index(props) {
  const isrReverse = useMemo(() => props.title.length % 2 === 0, [props]);
  const self = createRef();
  const [pass, setPass] = useState(false);
  function adjust() {
    if (!self.current) return;
    const doc = document.documentElement;
    if (doc.scrollTop + doc.clientHeight >= self.current.offsetTop + OFFSET) {
      setPass(true);
      document.removeEventListener("scroll", adjust);
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", adjust);
    adjust();
    return () => {
      document.removeEventListener("scroll", adjust);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      ref={self}
      className={
        "ArticleCover" +
        (isrReverse ? " reverse" : "") +
        (pass ? " passanm" : "")
      }
    >
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="type">
          <Svg name={props.type.icon} />
          <span className="typename">{props.type.name}</span>
          <Svg name="flag" />
          <span className="flag">{props.flag}</span>
        </div>
        <div className="information">
          <div>
            <Svg name="details" />
            <span>{props.views}</span>
          </div>
          <div>
            <Svg name="comment" />
            <span>{props.commentssize}</span>
          </div>
          <div>
            <Svg name="date" />
            <span>{formatDistance(changeDateFormat(props.updateTime))}</span>
          </div>
        </div>
        <div className="tags">
          {props.tags.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.color, borderColor: item.color }}
            >
              <span
                style={{ borderColor: "transparent transparent " + item.color }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="cover"
        style={{ backgroundImage: `url(${props.firstPicture})` }}
      ></div>
    </div>
  );
}
