// import React from "react";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

// import App from "../App";

// test("load and display app", async () => {
//   render(<App />);
//   const methoddiv = await waitFor(() => screen.getByTestId("request"));
//   const urldiv = await waitFor(() => screen.getByTestId("url"));

//   expect(methoddiv.textContent).toBe("Request Method:");
//   expect(urldiv).toHaveTextContent("URL:");
// });
// test("test form tags  ", async () => {
//   render(<App />);

//   const spanText = await waitFor(() => screen.getByTestId("span-url"));
//   const getbutton = screen.getByTestId("get");
//   const postbutton = screen.getByTestId("post");

//   const putbutton = screen.getByTestId("put");
//   const deletebutton = screen.getByTestId("delete");

//   fireEvent.click(getbutton);
//   fireEvent.click(postbutton);
//   fireEvent.click(putbutton);
//   fireEvent.click(deletebutton);

//   expect(spanText).toHaveTextContent("URL:");
// });
