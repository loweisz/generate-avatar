import {
  generatePath,
  generateFromString,
  invertHex,
} from "./generateFromString";

describe("generatePath works", () => {
  it("should generate with correct values", () => {
    const expectedPath =
      "m 150 522 Q 255 45 -222 150 Q 255 255 150 -222 Q 45 255 522 150 Q 45 45 150 522 z";
    expect(generatePath(45, 22, 2)).toBe(expectedPath);
  });
  it("should generate with edge values", () => {
    const expectedPath2 =
      "m 150 755 Q 45 255 -455 150 Q 45 45 150 -455 Q 255 45 755 150 Q 255 255 150 755 z";
    expect(generatePath(255, 255, 2)).toBe(expectedPath2);
  });
  it("should generate with zero values", () => {
    const expectedPath2 =
      "m 150 100 Q 300 0 200 150 Q 300 300 150 200 Q 0 300 100 150 Q 0 0 150 100 z";
    expect(generatePath(0, 0, 0)).toBe(expectedPath2);
  });
});

describe("generate from string works", () => {
  it("should generate with correct values for simple string", () => {
    const expectedSVG =
      '<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect id="bg" width="300" height="300" fill="#098f6b" /><path d="m 150 570 Q 95 205 -270 150 Q 95 95 150 -270 Q 205 95 570 150 Q 205 205 150 570 z" fill="#27b4f6" /><path d="m 150 511 Q 267 33 -211 150 Q 267 267 150 -211 Q 33 267 511 150 Q 33 33 150 511 z" fill="#D84B09" /><path d="m 150 302 Q 185 115 -2 150 Q 185 185 150 -2 Q 115 185 302 150 Q 115 115 150 302 z" fill="#F67094" /></svg>';
    expect(generateFromString("test")).toBe(expectedSVG);
  });
  it("should generate with correct values for uuid", () => {
    const expectedSVG =
      '<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect id="bg" width="300" height="300" fill="#e19eb6" /><path d="m 150 646 Q 293 7 -346 150 Q 293 293 150 -346 Q 7 293 646 150 Q 7 7 150 646 z" fill="#e84404" /><path d="m 150 399 Q 298 2 -99 150 Q 298 298 150 -99 Q 2 298 399 150 Q 2 2 150 399 z" fill="#17BBFB" /><path d="m 150 312 Q 271 29 -12 150 Q 271 271 150 -12 Q 29 271 312 150 Q 29 29 150 312 z" fill="#1E6149" /></svg>';
    expect(generateFromString("438626b9-0d9a-4185-a1f5-3cf388740c74")).toBe(
      expectedSVG
    );
  });
});

describe("invert hex works", () => {
  it("should invert basic hex", () => {
    const hexCol = "F56E24";
    const invHexCol = "0A91DB";
    expect(invertHex(hexCol)).toBe(invHexCol);
  });
  it("should invert black to white", () => {
    const hexCol = "000000";
    const invHexCol = "FFFFFF";
    expect(invertHex(hexCol)).toBe(invHexCol);
  });
  it("should invert white to black", () => {
    const hexCol = "FFFFFF";
    const invHexCol = "000000";
    expect(invertHex(hexCol)).toBe(invHexCol);
  });
});
