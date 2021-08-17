import { render, screen } from "@testing-library/react";
import Message from "./message";

describe("Message", () => {
    it("Matches spapshot online", () => {
        const component = render(<Message author="Beluga" text="Catch me" />);
        expect(component).toMatchSnapshot();
    })

    it("Should contain msg text 'Hello'", () => {
        render(<Message author="Beluga" text="Catch me" />);

        const wrapper = screen.getByText(/Catch/i);

        expect(wrapper).toBeInTheDocument();
    })
})