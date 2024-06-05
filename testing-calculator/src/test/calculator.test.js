import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe("<Calculator />", () => {
  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);
    screen.getByText(/Calculator/i); // case insensitive
    expect(true).toBe(true);
  });
});
