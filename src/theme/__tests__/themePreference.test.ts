import {
  resolveThemeMode,
  THEME_BEFORE_PAINT_SCRIPT,
  THEME_MODE_STORAGE_KEY,
} from "../themePreference";

describe("themePreference", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("resolveThemeMode honors explicit light and dark", () => {
    expect(resolveThemeMode("light")).toBe("light");
    expect(resolveThemeMode("dark")).toBe("dark");
  });

  it("resolveThemeMode uses system when preference is system or null", () => {
    const matchMedia = jest
      .spyOn(window, "matchMedia")
      .mockImplementation((query: string) => ({
        matches: query.includes("dark"),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

    expect(resolveThemeMode("system")).toBe("dark");
    expect(resolveThemeMode(null)).toBe("dark");

    matchMedia.mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    expect(resolveThemeMode("system")).toBe("light");
    matchMedia.mockRestore();
  });

  it("before-paint script sets data-theme from localStorage", () => {
    localStorage.setItem(THEME_MODE_STORAGE_KEY, "dark");
    // eslint-disable-next-line no-eval
    eval(THEME_BEFORE_PAINT_SCRIPT);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("before-paint script falls back to system preference", () => {
    jest.spyOn(window, "matchMedia").mockImplementation(() => ({
      matches: true,
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    // eslint-disable-next-line no-eval
    eval(THEME_BEFORE_PAINT_SCRIPT);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
