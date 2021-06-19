import { DragMemoryComponent } from "./dragMemoryGame.component";
jest.mock("./../../assets/images/popartru.jpg", () => "popartru.jpg");
import { QUEENS } from "./../../../fixtures/Queens";
import { render } from "lit";

describe("Memory game", () => {
  const component = new DragMemoryComponent();
  component.queens = QUEENS;

  it("queensGame should be equal to 12", () => {
    component.firstLoad = true;
    component.queensNumber = 6;
    component.queensGame = [];
    component.startGame();
    expect(component.queensGame.length).toEqual(component.queensNumber * 2);
  });

  it("couplesMatched should increment ", () => {
    component.queensNumber = 6;
    component.couplesMatched = 0;
    component.selectedCard1 = document.createElement("div");
    component.selectedCard2 = document.createElement("div");
    component.selectedCard1.innerHTML = "1";
    component.selectedCard2.innerHTML = "1";
    component.matchCards();

    expect(component.couplesMatched).toEqual(1);
  });

  it("couplesMatched should not increment ", () => {
    component.queensNumber = 6;
    component.couplesMatched = 0;
    component.selectedCard1 = document.createElement("div");
    component.selectedCard2 = document.createElement("div");
    component.selectedCard1.innerHTML = "1";
    component.selectedCard2.innerHTML = "7";
    component.matchCards();

    expect(component.couplesMatched).toEqual(0);
  });
});
