import "global-jsdom/register";
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import App from "../App.js";

let rootContainer;
beforeEach(() => {
  // setup a DOM element as a render target
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(function () {
  // cleanup on exiting
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Check Rendering of App Function", () => {
  it("All Components Exist or Not", (done) => {
    act(() => {
      ReactDOM.createRoot(rootContainer).render(<App />);
    });

    expect(rootContainer.querySelector(".header")).toBeInTheDocument();
    expect(rootContainer.querySelector(".highlights__wrapper")).toBeInTheDocument();
    expect(rootContainer.querySelector(".visit__wrapper")).toBeInTheDocument();
    expect(rootContainer.querySelector(".testimonials__wrapper")).toBeInTheDocument();
    expect(rootContainer.querySelector(".features__wrapper")).toBeInTheDocument();
    expect(rootContainer.querySelector(".about__wrapper")).toBeInTheDocument();
    expect(rootContainer.querySelector("footer__wrapper")).toBeInTheDocument();

    done();
  });
});
