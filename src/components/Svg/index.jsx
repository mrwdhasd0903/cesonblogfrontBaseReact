function Index(props) {
  const { name, fill } = props;

  return (
    <svg {...props} className={"svg-" + name}>
      <use xlinkHref={"#" + name} fill={fill} />
    </svg>
  );
}

export default Index;
