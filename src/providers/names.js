import React, {createContext} from "react";
import { useContext } from "react/cjs/react.development";

import { names } from '../data'

const NamesContext = createContext()

export function NamesProvider({children}) {
  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  )
}

export function useNames() {
  const context = useContext(NamesContext)
  if (!context){
    throw new Error('You forgot the <NamesProvider>')
  }
  return context
}