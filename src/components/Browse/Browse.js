import React from "react";
//
import { Categories, RecentTracks } from "../../containers"
import { Loading } from "../../components"

export default function Browse({ isLoading, categoriesData, recentData }) {
  return !isLoading ? (
    <div>
      <RecentTracks data={recentData}/>
      <Categories data={categoriesData}/>
    </div>
  ) : (
    <Loading text=""/>
  )
}
