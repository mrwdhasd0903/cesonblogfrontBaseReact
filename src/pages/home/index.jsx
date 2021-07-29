import "./index.scss";
import { useState, useEffect } from "myact";
import ArticleCover from "@cp/ArticleCover";
import Profile from "@cp/Profile";
import More from "@cp/More";
import data from "./data";
import Tags from "./components/Tags";
import Types from "./components/Types";
export default function Index(props) {
  const [articleList, setArticleList] = useState(data);

  const [pageData, setPageData] = useState({
    total: 109,
    size: 10,
    curr: 1,
  });

  useEffect(() => {
    loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageData.curr]);

  function setCurr(curr) {
    setPageData({ ...pageData, curr: curr });
  }

  function loadMore() {
    setTimeout(() => {
      setArticleList([]);
      setArticleList([...data]);
    }, 300);
  }
  return (
    <div className="Home">
      {/* 左侧 */}
      <div className="left">
        {articleList.map((item, index) => (
          <ArticleCover {...item} key={item.id + "" + index} />
        ))}
        <More pageData={pageData} pageChange={setCurr} />
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
