import Header from "../components/Header";
import { shallow } from "enzyme";
import { findByTestAttr } from "../testsUtils";

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component
}

describe("Header component", () => {
	// const container = document.createElement('div');
	let component;
	beforeEach(() => {
		component = setUp()
	})

	test("should render without crash", async () => {
		const header = await findByTestAttr(component, "header")
		expect(header.length).toBe(1)
		// render(
		// 	<Header />
		// 	, container);
		// const wrapper = shallow(<Header/>)
		// console.log(wrapper.debug())
	})

	test('should render a logo', () => {
		// render(<Header />);
		// const listopayeLogo = screen.getByAltText("listopayeLogo");
		// expect(listopayeLogo).toBeInTheDocument();
		// eslint-disable-next-line testing-library/await-async-query
		const listoPayeLogo = findByTestAttr(component, "listopayeLogo")
		expect(listoPayeLogo.length).toBe(1)
	})
})