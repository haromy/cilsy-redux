import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ counter, tambahSatu, tambahDariInput }) => {
  const [array, setarray] = useState([]);

  const onTambah = () => {
    const init = {
      no: array.length + 1,
      detail: ''
    }
    const updatedArray = [...array, init];
    setarray(updatedArray);
  }

  const onUpdate = (index, val) => {
    let updatedArray = [...array];
    updatedArray[index].detail = val;
    setarray(updatedArray);
  }

  console.log(array);

  return (
    <div>
      <h4>TO DO LIST</h4>
      <button
        className="btn btn-primary"
        onClick={() => onTambah()}
      >
        tambah satu
      </button>
      <table>
        <thead>

          <tr>
            <th className="no">No</th>
            <th className="detail">Detail</th>
          </tr>
        </thead>
        <tbody>
          {
            array.map((dt, index) => (
              <tr key={index}>
                <td>
                  {dt.no}
                </td>
                <td>
                  <input
                    value={dt.detail}
                    onChange={(val) => onUpdate(index, val.target.value)}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default connect(null, null)(Home);
