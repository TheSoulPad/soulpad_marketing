import { render, screen } from "@testing-library/react";
import React from "react";
import useTheme from "../useTheme";

function TestComponent({ name }: { name: string }) {
  const theme = useTheme(name);
  return (
    <div>
      <span data-testid="theme-id">{theme?.ThemeID}</span>
      <span data-testid="theme-keys">
        {JSON.stringify(Object.keys(theme || {}))}
      </span>
    </div>
  );
}

describe("useTheme hook", () => {
  it("returns the dreamy theme when given 'DREAMY'", () => {
    render(<TestComponent name="DREAMY" />);

    const id = screen.getByTestId("theme-id").textContent;
    expect(id).toBe("DREAMY");

    const keys = screen.getByTestId("theme-keys").textContent || "";
    expect(keys).toContain("Button");
    expect(keys).toContain("Card");
    expect(keys).toContain("Paper");
    expect(keys).toContain("MenuSelection");
    expect(keys).toContain("RichTextPost");
  });
});
