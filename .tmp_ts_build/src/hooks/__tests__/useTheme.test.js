import { render, screen } from "@testing-library/react";
import React from "react";
import useTheme from "../useTheme";
function TestComponent(_a) {
    var name = _a.name;
    var theme = useTheme(name);
    return (React.createElement("div", null,
        React.createElement("span", { "data-testid": "theme-id" }, theme === null || theme === void 0 ? void 0 : theme.ThemeID),
        React.createElement("span", { "data-testid": "theme-keys" }, JSON.stringify(Object.keys(theme || {})))));
}
describe("useTheme hook", function () {
    it("returns the dreamy theme when given 'DREAMY'", function () {
        render(React.createElement(TestComponent, { name: "DREAMY" }));
        var id = screen.getByTestId("theme-id").textContent;
        expect(id).toBe("DREAMY");
        var keys = screen.getByTestId("theme-keys").textContent || "";
        expect(keys).toContain("Button");
        expect(keys).toContain("Card");
        expect(keys).toContain("Paper");
        expect(keys).toContain("MenuSelection");
        expect(keys).toContain("RichTextPost");
    });
});
