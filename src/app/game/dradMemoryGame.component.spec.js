import { dragMemoruGame } from "./dragMemoryGame.component";

describe("Memory game", () => {
  it("should get array", () => {
    const array = new shuffleQueens();

    expect(shuffleQueens(array)).toBe(array);
  });
});
