import { QUEENS } from "../../../fixtures/queens";
import { QueensRepository } from "./queens.repository";
import { QueensService } from "./queens.service";
jest.mock("./queens.repository");

describe("Queens service", () => {
  beforeEach(() => {
    QueensRepository.mockClear();
  });

  it("should load queens", async () => {
    QueensRepository.mockImplementation(() => {
      return {
        getAllQueens: () => {
          return QUEENS;
        }
      };
    });

    const service = new QueensService();
    const queens = await service.getQueens();
    expect(queens.data.length).toEqual(18);
  });
});
