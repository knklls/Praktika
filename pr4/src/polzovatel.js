import React from "react"

function User(props) {
  return <h1>Привет, я {props.name}, мне {props.age} лет, я живу {props.city}</h1>
}

export default User