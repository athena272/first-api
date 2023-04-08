const http = require('http')
const url = require('url')
const routes = require('./routes.js')

const server = http.createServer((req, res) => {
    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)
    const parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)

    const route = routes.find((routeObj) => routeObj.method === req.method && routeObj.endpoint === parsedUrl.pathname)

    if (route) {
        req.query = parsedUrl.query
        route.handler(req, res)
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.end(`Cannot ${req.url}`)
    }
    
})

server.listen(3000, () => console.log('🔥 server online 🔥'))
