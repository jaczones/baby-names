import React, {Fragment} from "react";
import { NameList } from "./name-list";
import { useNames } from "../providers/names";
import { useAppState } from "../providers/app-state";

export function ShortList() {
  const names = useNames()
  const { shortList, setShortList} = useAppState()
  
  const shortListNames = names.filter((entry) => 
    shortList.includes(entry.id)
  )

  function removeFromShortList(id) {
    setShortList(shortList.filter((i) => i !== id));
  }
  const hasNames = shortListNames.length > 0
  return (
    <div className='short-list'>
      <h2>{hasNames ? "Your Shortlist" : "Click on a name to shortlist it"}</h2>
      {hasNames && (
      <Fragment>
        <NameList nameList={shortListNames} onItemClick={removeFromShortList}/>
        <hr />
      </Fragment>
      )}
    </div>
  )

}