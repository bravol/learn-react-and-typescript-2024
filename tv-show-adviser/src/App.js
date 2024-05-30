import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv_show";
import Logo from "./components/Logo";
import { Recommendation } from "./components/Recomendation";
import SearchBar from "./components/SearchBar";
import TVShowDetalls from "./components/TVShowDetalls";
import { BACKDROP_BASE_URL } from "./config";
import logo from "./images/logo.png";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  const [recommendationList, setRecommendationLists] = useState([]);

  const fetchPopulars = async () => {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  };

  //fetch recommendations
  const fetchRecommendations = async (id) => {
    const response = await TVShowAPI.fetchRecommendations(id);
    if (response.length > 0) {
      setRecommendationLists(response.slice(0, 10));
    }
  };
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  const updateCurrentTVShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

  //fetch recommendations
  async function searchTVShow(title) {
    const response = await TVShowAPI.fetchByTitle(title);
    if (response.length > 0) {
      setCurrentTVShow(response[0]);
    }
  }

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
            <SearchBar onSearch={searchTVShow} />
          </div>
        </div>
      </div>

      <div className="tv_show_detail">
        {currentTVShow && <TVShowDetalls currentTVShow={currentTVShow} />}
      </div>

      {/* displaying other recommedend TV shows */}
      <div className="recommendation_tv_show_item">
        {currentTVShow && (
          <Recommendation
            list={recommendationList}
            onClickItem={updateCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
