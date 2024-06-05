import { useState } from "react";
import s from "./App.module.css";
import { ImageList } from "./components/ImageList/ImageList";
import { DATA } from "./data";
import { useScrollPositionHook } from "./hooks/useScrollPositionHook";
export default function App() {
  const [imageList, setImageList] = useState(DATA);

  const { isBottom } = useScrollPositionHook();
  console.log(isBottom);
  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
    </div>
  );
}
