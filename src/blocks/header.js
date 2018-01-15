import navbar from './navbar';

export default function (state) {
	const {url} = state;

	if (url === '/') {
		return (
			<div className="header">
				{navbar(state)}
				<img src="https://monsterooo.github.io/getbem.com/assets/b_.svg" alt="b_"/>
			</div>
		);
	}

	return navbar(state);
}
