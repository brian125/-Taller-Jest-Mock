import * as app from "./app";
import * as math from "./math";

import {jest} from '@jest/globals';

test("calls math.add", () => {
  //Almacena la implementación original
  const originalAdd = math.add;
  // Simula agregar la implementación original
  math.add = jest.fn(originalAdd);
  // Espiar las llamadas para agregar
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // Anula la implementación
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restaurar la implementación original
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});
