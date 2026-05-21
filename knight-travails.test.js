import { knightMoves } from "./knight-travails";

describe("Knight Travails", () => {
  test("Implement BFS", () => {
    const array = knightMoves([3, 3], [4, 3]);

    expect(array).toEqual([
      [3, 3],
      [4, 1],
      [6, 2],
      [4, 3],
    ]);
  });
});
