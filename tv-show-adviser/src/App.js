import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv_show";
import Logo from "./components/Logo";
import TVShowDetalls from "./components/TVShowDetalls";
import { BACKDROP_BASE_URL } from "./config";
import logo from "./images/logo.png";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState([]);

  const fetchPopulars = async () => {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  };

  useEffect(() => {
    fetchPopulars();
  }, []);
  console.log(currentTVShow);
  return (
    <div
      className="main_container"
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="African Watch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>

      <div className="tv_show_detail">
        {currentTVShow && <TVShowDetalls currentTVShow={currentTVShow} />}
      </div>
      <div className="recommended_tv_shows">Recommended TV Shows</div>
    </div>
  );
}

export default App;
