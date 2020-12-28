import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ counter, tambahSatu, tambahDariInput }) => {
  const [input, setinput] = useState('');
  return (
    <div>
      <Link to="/login">
        <button className="btn btn-primary">Login</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-primary">signup</button>
      </Link>
      <div style={{ fontSize: 32 }}>COUNTER: {counter}</div>
      <button
        className="btn btn-primary"
        onClick={() => tambahSatu()}
      >
        ADD 1
      </button>
      <div>
        masukkan data 
        <input
          value={input}
          type="number"
          onChange={(val) => setinput(val.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => tambahDariInput(parseInt(input, 0))}
      >
        ADD berdasarkan input
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    tambahSatu: () => dispatch({
      type: 'INC_COUNTER'
    }),
    tambahDariInput: (value) => dispatch({
      type: 'ADD_COUNTER',
      value,
    })
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
