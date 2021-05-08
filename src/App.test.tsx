import { render } from "@testing-library/react";
import App from "./App";

test("renders Counter component", async () => {
  const { container } = render(<App />);
  const Counter = container.querySelector(".Counter");

  expect(Counter).toBeInTheDocument();
});
