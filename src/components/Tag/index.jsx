import "./index.scss";
export default function Index(props) {
  return (
    <div
      className="Tag"
      style={{ color: props.color, borderColor: props.color }}
    >
      <span className="name">{props.name}</span>
      <div className="num">{props.blogssize}</div>
    </div>
  );
}
