import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";



describe('contact us page test cases', () => {
    

test('should load contact component', () => { 

    render(<Contact/>);

    const heading= screen.getByRole("heading")

    expect(heading).toBeInTheDocument();


})

test('should load button inside contact component', () => { 

    render(<Contact/>);

    const button= screen.getByRole("button")

    expect(button).toBeInTheDocument();


})


it('should load button inside contact component', () => { 

    render(<Contact/>);

    const inputBoxes= screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2);


})
});

// it and test are same