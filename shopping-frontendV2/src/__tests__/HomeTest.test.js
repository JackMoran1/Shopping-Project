import {render, screen } from '@testing-library/react';
import Home from '../components/home/Home';

test("Example 1 renders successfully", () => {
    render(<Home />);

    const line1 = screen.getByText(/Welcome to our eCommerce site!/i);

    expect(line1).toBeInTheDocument();

    const line2 = screen.getByText(/Select a category from the left menu to begin./i);

    expect(line2).toBeInTheDocument();
})