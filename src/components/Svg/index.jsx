function Index(props) {
  const { name, fill } = props;

  return (
    <svg className={"svg-" + name}>
      <use xlinkHref={"#" + name} fill={fill} />
    </svg>
  );
}

export default Index;
