import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import emojiList from "../emojiList.json";
import userEvent from "@testing-library/user-event";

describe("Emoji Search Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  //Heder render control

  test("header render test", () => {
    const headerElement = screen.getByText("Emoji Search");
    expect(headerElement).toBeInTheDocument();
  });

  //Emoji list render control

  test("emoji list render check test", () => {
    let testList = emojiList.slice(0, 20);
    testList.forEach((emoji) => {
      expect(screen.getByText(emoji.title)).toBeInTheDocument();
    });
  });

  //Filter process control

  test("filter test", () => {
    const search = "100";
    //select input
    const input = screen.getByTestId("searchInput");
    //fill the input
    userEvent.type(input, search);

    //assertion
    expect(screen.getByText(search)).toBeInTheDocument();
  });

  // Copy operation control

  test("emoji copy test", async () => {
    const emoji = "💯";
    const title = "100";

    // select emoji row
    const clickEmoji = screen.getByTestId(title);

    // click emoji row
    userEvent.click(clickEmoji);

    // emoji control
    expect(clickEmoji).toHaveAttribute("data-clipboard-text", emoji);
  });
});
