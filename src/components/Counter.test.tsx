import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

test("default initial state equals '0'", async () => {
  const mockOnChange = jest.fn();
  const { container } = render(<Counter onChange={mockOnChange} />);

  expect(container.querySelector(".value")?.textContent).toEqual("0");
  expect(mockOnChange.mock.calls.length).toBe(0);
});

test("initial state can be set via prop", async () => {
  const mockOnChange = jest.fn();
  const { container } = render(<Counter initial={5} onChange={mockOnChange} />);

  expect(container.querySelector(".value")?.textContent).toEqual("5");
});

test("incrementing the counter will change the value", async () => {
  const mockOnChange = jest.fn();
  const { container, getByTestId } = render(
    <Counter onChange={mockOnChange} />
  );

  fireEvent.click(getByTestId("+"));

  expect(container.querySelector(".value")?.textContent).toEqual("1");
  expect(mockOnChange.mock.calls.length).toBe(1);
  expect(mockOnChange.mock.calls[0][0]).toBe(1);
});

test("decrementing the counter will change the value", async () => {
  const mockOnChange = jest.fn();
  const { container, getByTestId } = render(
    <Counter onChange={mockOnChange} />
  );

  fireEvent.click(getByTestId("-"));

  expect(container.querySelector(".value")?.textContent).toEqual("-1");
  expect(mockOnChange.mock.calls.length).toBe(1);
  expect(mockOnChange.mock.calls[0][0]).toBe(-1);
});
