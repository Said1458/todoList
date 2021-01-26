import React from 'react';
export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, statusCode: null };
	}

	componentDidCatch(error) {
		this.setState({ error: error, hasError: true, statusCode: error.status });
	}

	render() {
		if (this.state.hasError) {
			let render;

			console.log('hasError', this.state.error.status);
			switch (this.state.statusCode) {
				case 404:
					render = <h1>Page Not found :(</h1>;
					break;
				case 500:
					render = <h1>Something went Wrong :o</h1>;
					break;
				case 401:
					render = <h1>X Unauthorized X</h1>;
					break;
				default:
					render = <h1>Something went Wrong :o</h1>;
					break;
			}
			// You can render any custom fallback UI
			return render;
		}

		return this.props.children;
	}
}
