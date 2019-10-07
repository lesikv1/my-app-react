import React, { useReducer } from 'react';
import Context from './utils/context'
import { Main } from './container'
import * as Reducer from './store/reducers/index'
import './App.css';

const App = () => {
  const [state, setVisibleTable] = useReducer(Reducer.showingTable, Reducer.initialState)

  return (
    <div>
      <Context.Provider
        value={{
          state,
          dispatch: {
            setVisibleTable
          }
        }}
      >
        <Main/>
      </Context.Provider>
    </div>
  )
}

export default App;
