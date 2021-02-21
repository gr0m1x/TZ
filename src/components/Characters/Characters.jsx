import React, {useEffect, useState} from 'react';
import axios from "axios";
import Character from "./Character/Character";
import "./characters.css"
import {useLocation} from "react-router-dom";
import Pagination from "../Pagination/Pagination";

function Characters() {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const [page, setPage] = useState(null)

  const [allCharacters, setAllCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [count, setCount] = useState(null)

  useEffect(async () => {
    await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setTotalPages(res.data.info['pages'])
        setCount(res.data.info['count'])
        setAllCharacters(res.data.results)
      })
  }, [page])

  useEffect(() => {
    setPage(query.get("page"))
  }, [page])

  const sortName = () => {
    let sortCharacters = allCharacters.sort((a,b) =>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    setAllCharacters( [...sortCharacters])
  }

  return (
    <div className="characters">
      <Pagination totalPages={totalPages} currentPage={page} setPage={setPage}/>
      <table className="characters-list">
        <thead>
        <tr>
          <th className="name" onClick={sortName}>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Photo</th>
        </tr>
        </thead>
        <tbody>
        {allCharacters?.map(i =>
          <Character key={i.id} characterData={i}/>
        )}
        </tbody>
      </table>
      <Pagination totalPages={totalPages}
                  currentPage={page}
                  setPage={setPage}
                  count={count}
      />
    </div>
  );
}

export default Characters;
