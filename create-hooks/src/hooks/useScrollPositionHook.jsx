import { useEffect, useState } from "react";

export function useScrollPositionHook() {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      );
    });
  }, []);

  return { isBottom };
}
