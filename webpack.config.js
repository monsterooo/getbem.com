const fs = require('fs');

require.extensions['.md'] = function mdLoader(module, filename) {
	module.exports = fs.readFileSync(filename, 'utf-8');
};

require('babel-register');

const getConfig = require('hjs-webpack');
const toHtml = require('vdom-to-html');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const app = require('./src/views/app').default;

const config = getConfig({
	in: 'src/main.js',
	out: 'public',
	clearBeforeBuild: true,
	html: function (context) {
		function render(state) {
			return context.defaultTemplate({
				title: 'BEM — Block Element Modifier',
				metaTags: {
					'description': 'BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.',
					'tags': 'BEM, HTML, CSS, JS, JavaScript, framework, front-end, frontend, web development, code sharing, components, blocks, react, webpack',
					'author': 'Vsevolod Strukchinsky, Vladimir Starkov and contributors',
					'twitter:card': 'summary',
					'twitter:site': '@getbem',
					'og:image': 'https://monsterooo.github.io/getbem.com/bem_black.png',
					'og:url': 'https://monsterooo.github.io/getbem.com/',
					'og:title': 'BEM — Block Element Modifier',
					'og: description': 'BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.'
				},
				head: [
					'<link rel="icon" type="image/png" href="https://monsterooo.github.io/getbem.com//assets/favicon.png"/>'
				],
				html: toHtml(app(state))
			});
		}

		return {
			'index.html': render({url: 'https://monsterooo.github.io/getbem.com/'}),
			'introduction/index.html': render({url: 'https://monsterooo.github.io/getbem.com/introduction/'}),
			'naming/index.html': render({url: 'https://monsterooo.github.io/getbem.com/naming/'}),
			'faq/index.html': render({url: 'https://monsterooo.github.io/getbem.com/faq/'})
		};
	}
});

config.plugins.push(
	new CopyWebpackPlugin([
		{from: './src/assets', to: 'assets'},
		{from: './src/sitemap.xml', to: '.'}
	])
);

config.module.loaders.push({test: /\.md$/, loader: 'raw-loader'});

module.exports = config;
