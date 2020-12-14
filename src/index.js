import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { useSelector, useDispatch } from 'react-redux';


export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    count: 0,
  },

  reducers: {
    up: (state, action) => {
      const increment = action.payload || 1
      state.count += increment
    },
    down: (state, action) => {
      const decrement = action.payload || 1
      state.count -= decrement
    }
  }

})



const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});



const fetchLength = () => async dispatch => {
  const result = await fetch("http://localhost:3000/")
  const text = await result.text()

  const actions = counterSlice.actions

  dispatch(actions.up(text.length))
}





const App = () => {

  const count = useSelector(state => state.counter.count)

  const actions = counterSlice.actions

  const dispatch = useDispatch()

  const countUp = () => dispatch(actions.up())
  const plusFive = () => dispatch(actions.up(5))

  const countDown = () => dispatch(actions.down())
  const minusFive = () => dispatch(actions.down(5))

  const countAsync = () => dispatch(fetchLength())

  return (
    <div style={{ margin: 50 }}>
      Count: {count} <br />
      <button onClick={countUp}>+</button>
      <button onClick={plusFive}>+ 5</button>
      {' '}
      <button onClick={countDown}>-</button>
      <button onClick={minusFive}>- 5</button>
      {' '}
      <button onClick={countAsync}>async fetch</button>
    </div>
  )
}



const Container = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}


ReactDOM.render(
  <Container />,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
