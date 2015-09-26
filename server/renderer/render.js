import fs from 'fs';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from '../../client/index'

function render(req, res){
	const html = React.renderToString(<Provider>
			{() => <App />}
		</Provider>)
	res.send(renderFullPage(html))
}

function renderFullPage(html, initialState){
	var index = fs.readFileSync('./index.html').toString();
	return index.replace('{{html}}', html);
}

export default render;