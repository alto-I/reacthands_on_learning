import React from "react"
import ReactDOM from "react-dom"
import PropsTypes from "props-types"

function App({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

App.propTypes = {
  name: PropsTypes.string
}

ReactDOM.render(
  <App name={true} />
  document.getElementById("root")
)
