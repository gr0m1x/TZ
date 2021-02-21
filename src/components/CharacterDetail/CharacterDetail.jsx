import React, {useEffect, useState} from "react"
import {Link, useHistory, withRouter} from "react-router-dom";
import axios from "axios";
import "./character-detail.css"

function CharacterDetail({match}) {
  let history = useHistory()

  const [characterInfo, setCharacterInfo] = useState(null)

  useEffect(async () => {
     await axios.get(`https://rickandmortyapi.com/api/character/${match.params.charterId}`)
      .then(res => {
        setCharacterInfo(res.data)
      })
      .catch(error => history.push({pathname :`/404`}))
  }, [])

  return (
    <>
      <Link to="/">Back to Home</Link>
      { characterInfo &&
        <div className="chart-info">
          <img className="chart-info__image" src={characterInfo.image} alt=""/>
          <div>
            <p className="chart-info__item"><span>Name: </span>{characterInfo.name}</p>
            <p className="chart-info__item"><span>Gender: </span>{characterInfo.gender}</p>
            <p className="chart-info__item"><span>Species: </span>{characterInfo.species}</p>
            <p className="chart-info__item"><span>Status: </span>{characterInfo.status}</p>
            <p className="chart-info__item"><span>Location: </span>{characterInfo.location.name}</p>
          </div>
        </div>
      }

    </>
  )
}

export default withRouter(CharacterDetail);