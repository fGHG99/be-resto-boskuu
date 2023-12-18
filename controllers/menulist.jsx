import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const response = await axios.get("http://localhost:3333/menu");
    setMenu(response.data.data);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1>B</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <th>No</th>
            <th>Judul</th>
            <th>Penerbit</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </thead>

          {books.map((buku, index) => (
            <tr key ={buku.id}>
              <td>{index + 1}</td>
              <td>{buku.Judul}</td>
              <td>{buku.Penerbit}</td>
              <td>{buku.Deskripsi}
              </td>
              <td>
                <button class="button is-info">Edit</button>
                <button class="button is-danger is-light">delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BookList;