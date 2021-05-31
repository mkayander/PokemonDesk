/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Heading } from "../index";

describe("Heading", () => {
    let container: Element | null = null;

    beforeEach(() => {
        container = window.document.createElement("div");
        window.document.body.appendChild(container);
    });

    afterEach(() => {
        if (container !== null) {
            unmountComponentAtNode(container);
            container.remove();
            container = null;
        }
    });

    test("Render", () => {
        act(() => {
            render(<Heading />, container);
        });

        expect(container?.innerHTML).toBeDefined();
    });

    test("Render with children", () => {
        act(() => {
            render(<Heading>Title</Heading>, container);
        });

        expect(container?.textContent).toBe("Title");
    });

    test("Render with variant prop = h4", () => {
        act(() => {
            render(<Heading variant="h4">Title</Heading>, container);
        });

        expect(container?.querySelector("h4")).not.toBeNull()
    });
});
