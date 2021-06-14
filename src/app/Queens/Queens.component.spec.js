import { QueensRepository } from "./queens.repository";
import { QUEENS } from "./../../../fixtures/Queens";
import { QueensComponent } from "./Queens.component";
jest.mock("./queens.repository");

describe("Queens component", () => {
  beforeEach(() => {
    QueensRepository.mockClear();
  });

  it("should show all queens", async () => {
    QueensRepository.mockImplementation(() => {
      return {
        getAllQueens: () => QUEENS
      };
    });

    const component = new QueensComponent();
    await component.connectedCallback();
    const queens = component.shadowRoot.querySelector("#queens");
    expect(queens).not.toBeNull();
  });
});
