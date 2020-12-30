import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ array, tambahArray, deleteArrayById }) => {
  const [input, setinput] = useState('');
  console.log(array);
  return (
    <div>
      <div style={{ fontSize: 32 }}>COUNTER dari another page</div>
      {
        array && array.map((el, idx) => (
          <div style={{ display: 'inline'}}>
            <div key={idx}>{el.id} / {el.nama}</div>
            <button
              className="btn btn-primary"
              onClick={() => deleteArrayById(el.id)}
            >
              delete {el.nama}
            </button>
          </div>
        ))
      }
      <br />
      <input value={input} onChange={(opt) => setinput(opt.target.value)}/>
      <button
        className="btn btn-primary"
        onClick={() => {
          tambahArray({ id: array.length + 1, nama: input });
          setinput('');
        }}
      >
        Tambah Array
      </button>
    </div>
  );
}

// adalah membuat sebuah props (masukan) untuk ambil data dari redux store
const mapStateToProps = (state) => {
  return {
    array: state.arrayReducer.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambahArray: (data) => dispatch({
      type: 'TAMBAH_ARRAY',
      data,
    }),
    deleteArrayById: (id) => dispatch({
      type: 'DELETE_ARRAY',
      value: id,
    }),
    logout: () => dispatch({
      type: 'LOGOUT',
    })
  }
}


// connect adalah menghubungkan & inisialisasi props store dan function redux
export default connect(mapStateToProps, mapDispatchToProps)(Home);
