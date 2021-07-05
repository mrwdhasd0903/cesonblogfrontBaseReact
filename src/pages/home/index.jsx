import "./index.scss";
import { useState } from "myact";
import ArticleCover from "@cp/ArticleCover";
import Profile from "@cp/Profile";
import More from "@cp/More";
import data from "./data";
import Tags from "./components/Tags";
import Types from "./components/Types";
export default function Index(props) {
  const [articleList, setArticleList] = useState(data);
  function loadMore() {
    setArticleList([...articleList, ...data]);
  }
  return (
    <div className="Home">
      {/* 左侧 */}
      <div className="left">
        {articleList.map((item, index) => (
          <ArticleCover {...item} key={item.id + "" + index} />
        ))}
        <More moreClick={loadMore}/>
      </div>

      {/* 右侧 */}
      <div className="right">
        <Profile />
        <Types />
        <Tags />
      </div>
    </div>
  );
}
