import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { PropTypes } from 'prop-types';

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

const App = props => (
  <div>
    <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
      Decrease
    </button>
    <h1>
      Hello {props.counter}
    </h1>
    <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
      Increase
    </button>
  </div>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
};

const render = () => {
  ReactDOM.render(<App counter={store.getState().counter} />, document.getElementById('root'));
};

store.subscribe(render);

export default render;
