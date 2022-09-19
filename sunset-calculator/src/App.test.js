import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Main App", () => {
    it("should load the app", () => {
        render(<App />);

        const myApp = screen.getByText("Sunset Calculator");
        expect(myApp).toBeInTheDocument();
    });
});