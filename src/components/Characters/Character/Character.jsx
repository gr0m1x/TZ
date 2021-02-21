import React from "react"
import "./character.css"
import {useHistory} from 'react-router-dom';

function Character({characterData}) {
  const history = useHistory();

  return (
    <tr className="character" onClick={() => history.push({pathname :`characters/${characterData.id}`, id: characterData.id})}>
      <td className="character__name">
        <p>{characterData.name}</p>
      </td>
      <td className="character__status">
        <p>{characterData.status}</p>
      </td>
      <td className="character__species">
        <p>{characterData.species}</p>
      </td>
      <td className="character__image">
        <img src={characterData.image} alt="image"/>
      </td>
    </tr>
  )
}

export default Character;