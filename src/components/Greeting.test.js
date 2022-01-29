import Greeting from './Greeting';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

test('renders Hello World', () => {
    render(<Greeting />);

    //Act


    //Assert
    const element = screen.getByText('Hello there', {exact: false});
    expect(element).toBeInTheDocument();

});

test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', {exact: false});
    expect(outputElement).toBeInTheDocument();
})

test('renders changed if button WAS clicked', () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.getByText('Changed!', {exact: false});
    expect(outputElement).toBeInTheDocument();

})

test('Does not render good to see you if the button was clicked', () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.queryByText('good to see you', {exact: false});
    expect(outputElement).toBeNull();
})