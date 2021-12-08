import * as app from "./app";
import * as math from "./math";

import {jest} from '@jest/globals';

// Set all module functions to jest.fn
jest.mock("./math.js");
test("calls math.add2", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract2", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});