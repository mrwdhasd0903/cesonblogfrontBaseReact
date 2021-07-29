import React, { useState, useEffect } from "myact";
import "./index.scss";
import ArticleCover from "@cp/ArticleCover";
import data from "./data";
import Types from "./components/Types";
import More from "@cp/More";
export default function Index() {
  const [articleList, setArticleList] = useState(data);
  const [pageData, setPageData] = useState({
    total: 109,
    size: 10,
    curr: 1,
  });

  useEffect(() => {
    loadMore();
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
    <div className="Type">
      <Types />

      {articleList.map((item, index) => (
        <ArticleCover {...item} wide={true} key={item.id + "" + index} />
      ))}

      <More pageData={pageData} pageChange={setCurr} />
    </div>
  );
}
