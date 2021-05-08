import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

test("initial state equals '0'", async () => {
  const { container } = render(<Counter />);

  expect(container.querySelector(".value")?.textContent).toEqual("0");
});

test("incrementing the counter will change the value", async () => {
  const { container, getByTestId } = render(<Counter />);

  fireEvent.click(getByTestId("+"));

  expect(container.querySelector(".value")?.textContent).toEqual("1");
});

test("decrementing the counter will change the value", async () => {
  const { container, getByTestId } = render(<Counter />);

  fireEvent.click(getByTestId("-"));

  expect(container.querySelector(".value")?.textContent).toEqual("-1");
});
