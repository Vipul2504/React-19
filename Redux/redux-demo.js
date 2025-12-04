const redux = require("redux");

const countReducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.count - 1,
    };
  }
};

const countSubscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore);
};

store.subscribe(countSubscriber);
const store = redux.createStore(countReducer);
