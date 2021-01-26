import { Checkbox, TextInputMain } from './components/Inputs';
import Todolist from './pages/Todolist';
import ErrorBoundary from './pages/ErrorBoundary';
const { Button, AddButton, RoundButton } = require('./components/Buttons');

function App() {
	return (
		<div className='App'>
			<ErrorBoundary>
				<Todolist />
				{/* <h1>Buttons</h1>
			<Button>Hello World!</Button>
			<RoundButton />
			<AddButton />
			<br />
			<span>----</span>
			<Checkbox />
			<TextInputMain /> */}
			</ErrorBoundary>
		</div>
	);
}

export default App;
