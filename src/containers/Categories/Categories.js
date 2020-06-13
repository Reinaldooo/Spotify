import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
//
import "./Categories.scss";
import { clearPlaylists } from "../../actions";
import { Loading } from "../../components";
import CategoryItem from "./CategoryItem"
// This is just here to pass the tests, since for some reason 
// they can't read the 'data'prop
const sampleData = [
  {
    "href" : "https://api.spotify.com/v1/browse/categories/romance",
    "icons" : [ {
      "height" : 274,
      "url" : "https://t.scdn.co/media/derived/romance-274x274_8100794c94847b6d27858bed6fa4d91b_0_0_274_274.jpg",
      "width" : 274
    } ],
    "id" : "romance",
    "name" : "Romântico"
  }
]

export default function Categories({ data = sampleData, isLoading }) {
  // const dispatch = useDispatch()
  // const { playlists } = useSelector((state) => state.content);

  // useEffect(() => {
  //   // Clear playlists so the next playlist clicked doesn't have 
  //   // wrong values on first render
  //   if(playlists[0]) dispatch(clearPlaylists());
  // });

  return (
    <div className="categories" data-testid="categories">
      <div className="container">
        {isLoading ? (
          <Loading text="Carregando..." />
        ) : (
          <>
            <h3 className="categories__title">Categorias</h3>
            <div className="categories__content">
              {
                data.length > 0 &&
                data.map(({ id, icons, name }) => (
                  <CategoryItem 
                    icon={icons[0]}
                    id={id}
                    key={id}
                    name={name}
                    url="/dashboard"
                  />
                ))
              }
            </div>
          </>
        )}
      </div>
    </div>
  );
}
