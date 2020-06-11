import React from "react";
//
import "./Categories.scss";
import { Loading } from "../../components";
import CategoryItem from "./CategoryItem"

export default function Categories({ data, loading, path }) {
  return (
    <div className="categories" data-testid="categories">
      <div className="container">
        {loading ? (
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
