import React, { useMemo, Svg } from "myact";
import "./index.scss";
import { changeDateFormat, formatDistance } from "@u/changeDateFormat";

export default function Index(props) {
  const isrReverse = useMemo(() => props.title.length % 2 === 0, [props]);

  return (
    <div className={"ArticleCover" + (isrReverse ? " reverse" : "")}>
      <div className="content">
        {/* <div className="flag">{props.flag}</div> */}
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="type">{props.type.name}</div>
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
