import { useEffect } from "react";
import "./index2.css";

const ImageList = ({ currentIndex, imageList }) => {
  useEffect(() => {
    const listCount = imageList.length;
    const $ = document.querySelector.bind(document);

    function RemoveAllClass(id) {
      $("#item_" + id).classList.remove("item");
      $("#item_" + id).classList.remove("item_0");
      $("#item_" + id).classList.remove("item_1");
      $("#item_" + id).classList.remove("item_2");
      $("#item_" + id).classList.remove("item_3");
      $("#item_" + id).classList.remove("item_none_2");
    }

    const item_0 = currentIndex - 1 < 0 ? listCount - 1 : currentIndex - 1;
    const item_2 = currentIndex + 1 < listCount ? currentIndex + 1 : 0;
    const item_3 = item_2 + 1 < listCount ? item_2 + 1 : 0;
    const item_none_1 = item_0 - 1 < 0 ? listCount - 1 : item_0 - 1;
    const item_none_2 = item_3 + 1 < listCount ? item_3 + 1 : 0;

    RemoveAllClass(item_0);
    RemoveAllClass(currentIndex);
    RemoveAllClass(item_2);
    RemoveAllClass(item_3);
    RemoveAllClass(item_none_1);
    RemoveAllClass(item_none_2);

    $("#item_" + item_none_1).classList.add("item");
    $("#item_" + item_0).classList.add("item_0");
    $("#item_" + currentIndex).classList.add("item_1");
    $("#item_" + item_2).classList.add("item_2");
    $("#item_" + item_3).classList.add("item_3");
    $("#item_" + item_none_2).classList.add("item_none_2");
  }, [currentIndex, imageList]);

  return (
    <div>
      <ul>
        {imageList.map((item, index) => {
          return (
            <li key={item.id} className="item" id={`item_${index}`}>
              <img src={item.src} alt={item.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageList;
