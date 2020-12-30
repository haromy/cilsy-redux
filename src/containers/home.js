import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ counter, tambahSatu, tambahDariInput }) => {
  const [input, setinput] = useState('');
  return (
    <div>
      <Link to="/array">
        <button className="btn btn-primary">array page</button>
      </Link>
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

// adalah membuat sebuah props (masukan) untuk ambil data dari redux store
const mapStateToProps = (props) => {
  return {
    counter: props.counter.total,
  }
}

// adalah membuat sebuah function untuk memanggil redux action
const mapDispatchtoProps = (dispatch) => {
  return {
    tambahSatu: () => dispatch({
      type: 'INC_COUNTER'
    }),
    tambahDariInput: (value) => dispatch({
      type: 'TAMBAH_COUNTER_DARI_INPUT',
      value,
    })
  }
}

// connect adalah menghubungkan & inisialisasi props store dan function redux
export default connect(mapStateToProps, mapDispatchtoProps)(Home);
