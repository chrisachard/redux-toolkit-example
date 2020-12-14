# Sample redux-toolkit project


## Running the project:

> yarn
> yarn start



## 1/10

Create a "store" with "configureStore"

A store holds all your data and the actions that change that data

Use a "Provider" component (like context) to give the store to all your components






## 2/10

Create named "slices"

A slice holds a chunk of the state, plus the functions that can update that state

No more changing 4 different files just to write one action! 🎉





## 3/10

Add the slice to your store by adding the "reducer" from the slice to the "reducer" in the store

The slice ".reducer" (singular) is auto-created when you define your "reducers:" (plural) in the slice





## 4/10

Functions that update the state in your slice are "reducers"

A reducer takes the current state and the action (data) being performed, 

and updates the data in the slice's state

(redux-toolkit uses immer, so those state changes are actually non-mutating)





## 5/10

To get values from the store in a component, use a "selector"

A selector function is given the entire redux store and returns just the data you want

Pass your selector to the "useSelector" hook which will call it for you






## 6/10

To change data in the store, use the "actions" that are exported from the slice

These actions are named based on your named reducers

You don't call on their own however, because they need the current state and action params





## 7/10

To call the action, you "dispatch" it to the store

Use the "useDispatch" hook to get access to the "dispatch" function

then dispatch your action using that function

this automatically updates all components using "useSelector"





## 8/10

Actions can take params as well, which are passed in as the second argument to the reducer

the action "payload" will contain whatever is passed to the action

(to pass multiple params, use an object)





## 9/10

For async actions (like fetching data), you can use redux-thunk (already included!)

Create a thunk (function that returns a function)

it's async and gets dispatch as a param

dispatch inside your thunk function

Then dispatch that action like normal in component






## 10/10

What about just using Context instead?

Yes, I generally start projects with just context, but redux can have some advantages for larger projects or teams:

- provides structure that context doesn't
- can be easier to test
- redux dev tools are pretty cool 💯




## Resources:

Quick start redux-toolkit docs:
https://redux-toolkit.js.org/introduction/quick-start

Redux devtools chrome extension:
https://github.com/zalmoxisus/redux-devtools-extension

The current redux maintainer and general keeper of many links:
https://twitter.com/acemarke
































