import express from 'express'
import React from 'react'
import { Menu } from '../src/Menu'
import ReactDOMServer from 'react-dom/server'
import data from '../src/data.json'

const PORT = process.env.PORT || 4000

const app = express()
app.use(express.static('./build'))

app.get('/*', (req, res) => {
  const renderdHtml = ReactDOMServer.renderToString(
    <Menu recipes={data} title="Delicious Recipes" />,
  )

  const indexFile = path.resolve(
    "./build-server/index.html"
  )

  fs.readFile(indexFile, "utf8", (err, data) => {
    return res.send(
      data.replace(
        `<div id="root></div>`,
        `<div id="root>${renderdHtml}</div>`
      )
    )
  })
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
