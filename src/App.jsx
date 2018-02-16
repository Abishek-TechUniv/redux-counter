import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import store from './redux/store';
import actions from './redux/actions';

const App = props => (
  <div>
    <button onClick={() => store.dispatch(actions.decrement)}>
      Decrease
    </button>
    <h1>
      Hello {props.counter}
    </h1>
    <button onClick={() => store.dispatch(actions.increment)}>
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
