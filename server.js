import koa from 'koa'
import webpack from 'webpack'
import middleware from 'koa-webpack'
import config from './webpack.config'
import fs from 'fs'

const app = new koa()

const serverPort = process.env.PORT || 3000;

const compile = webpack(config)

app.use(middleware({
	compile: compile,
	config: config,
	dev: {
		noInfo: true,
    	publicPath: config.output.publicPath
	},
	hot: {
		reload: true,
		overlay: false 
	}
}));


app.use(async(ctx, next) => {
	let source = fs.readFileSync("index.html","utf-8");  
	ctx.set({
		'Content-Type': 'text/html'
	})
	ctx.body = source;
})

app.listen(serverPort, () => {
	console.log("app server aleady run in http://localhost:3000 \n");
})