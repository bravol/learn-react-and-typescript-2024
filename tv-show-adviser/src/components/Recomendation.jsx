import TVShowListItem from "./TVShowListItem";

export function Recommendation({ list, onClickItem }) {
  return (
    <div>
      <div className="recommendation_title">You'll probably like :</div>
      <div className="recommendation_list">
        {list.map((tvShow) => {
          return (
            <span className="recommendation_tv_show_item" key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClickItem={onClickItem}
                onClick={() => console.log("todo")}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
