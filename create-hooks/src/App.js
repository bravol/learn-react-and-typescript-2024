import axios from "axios";
import { useEffect, useState } from "react";
import s from "./App.module.css";
import { ImageList } from "./components/ImageList/ImageList";
import { useScrollPositionHook } from "./hooks/useScrollPositionHook";
export default function App() {
  const [imageList, setImageList] = useState([]);
  //store the page number to fetch
  const [pageToFetch, setPageToFetch] = useState(1);
  const { isBottom } = useScrollPositionHook();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImagesByPage(page) {
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  function increasePage() {
    setPageToFetch(pageToFetch + 1);
  }

  useEffect(() => {
    fetchImagesByPage(pageToFetch);
  }, [pageToFetch]);

  useEffect(() => {
    if (isBottom) {
      increasePage();
    }
  }, [isBottom]);

  console.log(isBottom);
  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role="status"></div>}
    </div>
  );
}
