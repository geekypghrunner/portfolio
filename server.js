// const next = require('next')
// const { createServer } = require('http')
// const routes = require('./routes')
// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })

// const handler = routes.getRequestHandler(app)

// app.prepare().then(() => {
//   createServer(handler).listen(port)
// })

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/blog/:slug', (req, res) => {
    const qParams = { slug: req.params.slug}
    app.render(req, res, '/blog/post', qParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})