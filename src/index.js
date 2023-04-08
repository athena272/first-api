const http = require('http');
const routes = require('./routes.js')

const server = http.createServer((req, res) => {
    console.log(`Method: ${req.method} | Endpoint: ${req.url}`)

    const route = routes.find((routeObj) => routeObj.method === req.method && routeObj.endpoint === req.url)

    if (route) {
        route.handler(req, res)
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.end(`Cannot ${req.url}`)
    }
    // if (req.url === '/users' && req.method === 'GET') {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify(users))
    // } 
})

server.listen(3000, () => console.log('🔥 server online 🔥'))
