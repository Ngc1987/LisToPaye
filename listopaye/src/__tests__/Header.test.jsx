import Header from "../components/Header";
import { render, fireEvent, screen } from '../setupTests';
import ReactDOM from 'react-dom';

describe("Header component", () => {
	const container = document.createElement('div');
	test("should render without crash", () => {
		ReactDOM.render(
			<Header />
			, container);
	})

	test('should show its content on the page', () => {
		render(<Header />);

		const listopayeLogo = screen.getByAltText("listopaye logo");
		expect(listopayeLogo).toBeInTheDocument();

	})
})