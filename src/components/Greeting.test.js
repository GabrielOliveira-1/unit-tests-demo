import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

test("renders Hello World as a text", () = {
    // Always -> Arrange, act, Assert results 
    render(<Greeting />);

    const helloWorldElement = screen.getByText('Hello World!')

    expect(helloWorldElement).toBeInTheDocument()
});
