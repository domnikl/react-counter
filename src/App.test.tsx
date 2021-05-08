import { fireEvent, render } from "@testing-library/react";
import App from "./App";

test("renders Counter component", async () => {
  window.localStorage.setItem("counter", "5");

  const { container } = render(<App />);
  const counterValue = container.querySelector(".Counter .value");

  expect(counterValue).toBeInTheDocument();
  expect(counterValue?.textContent).toEqual("5");
});

test("stores Counter value in localStorage on change", async () => {
  window.localStorage.setItem("counter", "42");

  const { container, findByTestId } = render(<App />);
  const counterValue = container.querySelector(".Counter .value");
  const buttonPlus = await findByTestId("+");

  expect(counterValue).toBeInTheDocument();
  expect(counterValue?.textContent).toEqual("42");

  fireEvent.click(buttonPlus);

  expect(window.localStorage.getItem("counter")).toEqual("43");
});
