import axios from "@api";
export default function index() {
  function send() {
    axios.get("/aaaa");
    console.log("object");
  }
  return (
    <div className="Navigation">
      导航
      <br />
      <br />
      <br />
      <br />
      <button onClick={send}>发送</button>
    </div>
  );
}
