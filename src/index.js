import _ from 'lodash';

function component() {
	const element = document.createElement('div');

	// Loadah, currentyl included via script, is required for this line to work (outdated)

	// Loadsh, now imported by this script(current)

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());
