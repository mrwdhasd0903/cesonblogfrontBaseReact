import { useState, Svg } from "myact";
import { Link } from "react-router-dom";
import "./index.scss";
export default function Index() {
  const [bg] = useState("/image/footer-bg.jpg");
  return (
    <div className="Footer">
      <div
        className="back"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="modal"></div>
      <div className="front">
        <div className="boxs">
          <div className="box qrcode">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src="https://wdhhh.cn/upload/io/img/2020/4/6/1586161319792.jpg" />
          </div>
          <div className="box links">
            <div className="title">友情链接</div>
            <Link className="link" to="#">
              友链空位,欢迎互联
            </Link>
            <Link className="link" to="#">
              友链空位,欢迎互联
            </Link>
            <Link className="link" to="#">
              友链空位,欢迎互联
            </Link>
            <Link className="link" to="#">
              查看更多&申请 >>
            </Link>
          </div>
          <div className="box contact">
            <div className="title">联系小王</div>
            <div className="info">
              <Svg name="qq" />
              <span>2553378438</span>
            </div>
            <div className="info">
              <Svg name="wechat" />
              <span>codemeow</span>
            </div>
            <Link className="github">
              <Svg name="github" />
            </Link>
          </div>
          <div className="box">
            唯有时间对我们一视同仁
          </div>
        </div>
        <div className="copyright">
          粤ICP备20003149号 | Copyright © 2019 - 2022 - www.wdhhh.cn | By
          小王的程序人生
        </div>
      </div>
    </div>
  );
}
