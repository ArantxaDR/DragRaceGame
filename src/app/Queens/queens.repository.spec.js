import axios from "axios";
import { QUEENS } from "../../../fixtures/queens";
import { QueensRepository } from "./queens.repository";
jest.mock("axios");

describe("Queens Repository", () => {
  beforeEach(() => {
    axios.mockClear();
  });

  it("should get all queens", async () => {
    axios.get = jest.fn().mockResolvedValue(QUEENS);

    const repository = new QueensRepository();
    const result = await repository.getAllQueens();
    expect(result.data.length).toEqual(18);
  });
});
