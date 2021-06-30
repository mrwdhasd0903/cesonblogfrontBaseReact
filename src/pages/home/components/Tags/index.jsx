import { useState, useEffect, useRef, Svg } from "myact";
import data from "./data.js";
import "./index.scss";
export default function Index(props) {
  // eslint-disable-next-line no-unused-vars
  const [tagList, setTagList] = useState(data);
  const [loading, setLoading] = useState(false);
  const WordCloudCanvas = useRef();
  const options = {
    list: tagList.map((item) => [
      item.name,
      item.blogssize,
      item.color,
      item.id,
    ]),
    gridSize: 9, // 密集程度 数字越小越密集
    weightFactor: 20, // 字体大小=原始大小*weightFactor
    maxFontSize: 20, //最大字号
    minFontSize: 10, //最小字号
    color: (word, weight, fontSize, distance, theta, item) => item[0],
    classes: (word, weight, fontSize, item) => "word_item word_" + item[1],
    backgroundColor: "", // 背景颜色
    rotateRatio: 0.4, // 字体倾斜(旋转)概率，1代表总是倾斜(旋转)
    click: (item, dimension, event) => {
      console.log(item, dimension, event);
    },
    hover: (item) => {
      if (item) {
        // 清除样式
        mouseLeave();
        const className = "word_" + item[3];
        const elements = document.getElementsByClassName(className);
        if (elements.length) {
          const element = elements[0];
          const originTransform = element.style.transform.split(" ")[0];
          element.style.transform = originTransform + " scale(1.2)";
        }
      }
    },
  };
  useEffect(() => {
    loadWordCloud();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function loadWordCloud() {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    window.WordCloud(WordCloudCanvas.current, options);
  }
  function mouseLeave() {
    const wordItems = document.getElementsByClassName("word_item");
    for (let i = 0; i < wordItems.length; i++) {
      const wordItem = wordItems[i];
      const originTransform = wordItem.style.transform.split(" ")[0];
      wordItem.style.transform = originTransform;
    }
  }
  return (
    <div className="Tags">
      <div
        className="word_cloud"
        onMouseLeave={mouseLeave}
        ref={WordCloudCanvas}
      ></div>
      <div
        onClick={loadWordCloud}
        className={(loading ? "loading" : "") + " reload"}
      >
        <Svg name="reload" />
      </div>
    </div>
  );
}
