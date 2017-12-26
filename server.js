const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const proxyMiddleware = require('http-proxy-middleware');
const port = process.env.PORT || 3000



/* 开发环境 */
app.use(
	'/gateway-web', proxyMiddleware(
		{ 
			target: 'http://10.0.6.6:8182', 
			changeOrigin: true 
		}
	)		
);


// We instantiate Nuxt.js with the options
let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

// Listen the server
app.listen(port, '0.0.0.0')
console.log('HTTP Server is running on: localhost:%s', port);