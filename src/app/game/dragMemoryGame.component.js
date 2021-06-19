import { css, html, LitElement } from "lit";
import { QueensService } from "./../Queens/queens.service";
import "./../../assets/images/popartru.jpg";

export class DragMemoryComponent extends LitElement {
  constructor() {
    super();
    this.service = new QueensService();
    this.selectedCard1 = null;
    this.selectedCard2 = null;
    this.couplesMatched = 0;
    this.firstLoad = true;
    this.queensNumber = 6;
  }

  static get properties() {
    return {
      firstLoad: { type: Boolean },
      queens: { type: Object },
      queensGame: { type: Object },
      queensNumber: { type: Number },
      totalTime: { type: Number },
      selectedCard1: { type: Object },
      selectedCard2: { type: Object },
      couplesMatched: { type: Number }
    };
  }

  static get styles() {
    return css`
      .game-title {
        text-align: center;
        font-family: "Kotta one";
        font-family: "Kotta One", serif;
        text-align: center;
        color: var(--queen-title-color, #da3333);
        text-shadow: 4px 5px 0px var(--queen-title-shadow, #f1caca);
        margin-top: 0.5rem;
      }
      .game-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
      }
      .game-grid {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(auto, auto);
        grid-gap: 1rem;
        justify-content: center;
        padding-bottom: 0.5em;
        perspective: 500px;
      }
      .game-card {
        position: relative;
        height: 175px;
        width: 125px;
      }
      .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;
        transition: transform 500ms ease-in-out;
      }
      .game-card.visible .card-back {
        transform: rotateY(-180deg);
      }
      .game-card.visible .card-front {
        transform: rotateY(0);
      }

      .overlay-text {
        display: none;
        width: 100%;
        height: 100vh;
        background-color: transparent;
        border: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        justify-content: center;
        align-items: center;
        text-shadow: 5px 1px 5px var(--shadow-color-light, #525f68);
        color: var(--overlay-text, #f009dc);
        font-family: Niconne;
        z-index: 100;
      }
      .overlay-text.visible {
        display: flex;
        flex-direction: column;
        animation: overlay-grow 500ms forwards;
      }
      .overlay-text-small {
        font-size: 0.3em;
        animation: neon 3s infinite;
      }

      @keyframes overlay-grow {
        from {
          font-size: 0;
        }
        to {
          font-size: 10em;
        }
      }
      @keyframes neon {
        0% {
          text-shadow: -1px -1px 1px var(--shadow-color-light, #b49bb4),
            -1px 1px 1px var(--shadow-color-light, #c77fdd),
            1px -1px 1px var(--shadow-color-light, #360a2d),
            1px 1px 1px var(--shadow-color-light, #dc99e9),
            0 0 3px var(--shadow-color-light, #c89dd1),
            0 0 10px var(--shadow-color-light, #ead9eb),
            0 0 20px var(--shadow-color-light, #f34deb),
            0 0 30px var(--shadow-color, #88568a),
            0 0 40px var(--shadow-color, #b60ee9),
            0 0 50px var(--shadow-color, #81587c),
            0 0 70px var(--shadow-color, #e692df),
            0 0 100px var(--shadow-color, #e47dee),
            0 0 200px var(--shadow-color, #cf84bc);
        }
        50% {
          text-shadow: -1px -1px 1px var(--shadow-color-light, #de81e6),
            -1px 1px 1px var(--shadow-color-light, #fef1ff),
            1px -1px 1px var(--shadow-color-light, #c1bcc2),
            1px 1px 1px var(--shadow-color-light, #f7e8f6),
            0 0 5px var(--shadow-color-light, #dabed9),
            0 0 15px var(--shadow-color-light, #dbd5db),
            0 0 25px var(--shadow-color-light, #ecb3de),
            0 0 40px var(--shadow-color, #a19fa1),
            0 0 50px var(--shadow-color, #d49ad4),
            0 0 60px var(--shadow-color, #f34dc1),
            0 0 80px var(--shadow-color, #ebddec),
            0 0 110px var(--shadow-color, #969197),
            0 0 210px var(--shadow-color, #ebcfe9);
        }
        100% {
          text-shadow: -1px -1px 1px var(--shadow-color-light, #f1f1f1),
            -1px 1px 1px var(--shadow-color-light, #dbc9ce),
            1px -1px 1px var(--shadow-color-light, #d39fca),
            1px 1px 1px var(--shadow-color-light, #d7add8),
            0 0 3px var(--shadow-color-light, #d8a7da),
            0 0 10px var(--shadow-color-light, #dba6f3),
            0 0 20px var(--shadow-color-light, #ebacd8),
            0 0 30px var(--shadow-color, #6e3660),
            0 0 40px var(--shadow-color, #f0a2ec),
            0 0 50px var(--shadow-color, #f5b0f5),
            0 0 70px var(--shadow-color, #d1cdd1),
            0 0 100px var(--shadow-color, #d7c6d8),
            0 0 200px var(--shadow-color, #8b838d);
        }
      }
      .card-front {
        transform: rotateY(180deg);
        background-color: aliceblue;
        border-radius: 12px;
      }
      .card-back {
        background-color: black;
        border-radius: 12px;
      }
      .back-img {
        position: absolute;
        width: 124px;
        height: 175px;
        border: 1px dotted var(--card-back-border-color, #c11a2b);
        border-radius: 12px;
      }
      .front-img {
        position: absolute;
        width: 100px;
        height: 100px;
        width: 124px;
        height: 175px;
        border-radius: 12px;
      }

      @media (min-width: 600px) and (max-width: 1000px) {
        .game-grid {
          grid-template-rows: repeat(1, 1fr);
          grid-template-columns: repeat(4, auto);
        }
      }
      @media (min-width: 1001px) {
        .game-grid {
          grid-template-rows: repeat(1, 1fr);
          grid-template-columns: repeat(6, auto);
        }
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.queens = await this.service.getQueens();
    this.startGame();
  }

  startGame() {
    let randomQueensPosition = [];
    let counterQueens = 0;
    this.queensGame = [];

    while (counterQueens < this.queensNumber) {
      let queenPosition = Math.floor(
        Math.random() * (this.queens.data.length + 1 - 1)
      );
      if (counterQueens === 0) {
        randomQueensPosition.push(queenPosition);
        counterQueens++;
      } else {
        let checkedQueen = randomQueensPosition.filter(
          (randomQueenPosition) => randomQueenPosition === queenPosition
        );
        if (checkedQueen.length === 0) {
          randomQueensPosition.push(queenPosition);
          counterQueens++;
        }
      }
    }
    randomQueensPosition.map((randomQueenPosition) => {
      this.queensGame.push(this.queens.data[randomQueenPosition]);
    });

    this.queensGame = [...this.queensGame, ...this.queensGame];
    this.shuffleQueens(this.queensGame);
  }

  shuffleQueens(queensGame) {
    for (let i = queensGame.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = queensGame[i];
      queensGame[i] = queensGame[j];
      queensGame[j] = temp;
    }
  }

  removeClass(e) {
    e.currentTarget.classList.remove("visible");

    let overlays = this.shadowRoot.querySelectorAll(".overlay-text");
    let cards = this.shadowRoot.querySelectorAll(".game-card");

    overlays.forEach((overlay) => {
      overlay.addEventListener("click", () => {
        overlay.classList.remove("visible");
      });
    });

    cards.forEach((card) => {
      card.classList.remove("visible");
      if (this.firstLoad === true) {
        card.addEventListener("click", () => {
          this.flipCard(card);
        });
      }
    });
    this.firstLoad = false;
  }

  flipCard(card) {
    card.classList.add("visible");
    this.selectedCard1 === null
      ? (this.selectedCard1 = card)
      : (this.selectedCard2 = card);
    this.matchCards();
  }

  matchCards() {
    if (this.selectedCard1 !== null && this.selectedCard2 !== null) {
      if (this.selectedCard1.innerHTML != this.selectedCard2.innerHTML) {
        let card1 = this.selectedCard1;
        let card2 = this.selectedCard2;
        setTimeout(() => {
          card1.classList.remove("visible");
          card2.classList.remove("visible");
        }, 1000);
      } else {
        this.couplesMatched++;
        if (this.couplesMatched === this.queensGame.length / 2) {
          this.shadowRoot.querySelector("#victory").classList.add("visible");
        }
      }
      this.selectedCard1 = null;
      this.selectedCard2 = null;
    }
  }

  resetGame(e) {
    this.selectedCard1 = null;
    this.selectedCard2 = null;
    this.couplesMatched = 0;
    this.startGame();
    this.removeClass(e);
  }

  render() {
    return html`<h1 class="game-title">Are you a winner?</h1>
      <button
        id="boton"
        class="overlay-text visible"
        @click="${(e) => {
          this.removeClass(e);
        }}"
      ></button>
        <button
          id="victory"
          class="overlay-text"
          @click="${(e) => {
            this.resetGame(e);
          }}"
        >
          Shantay, you stay<span class="overlay-text-small"
            >Click to restart</span
          >
        </button>

        <div class="game-grid">
          ${
            this.queensGame &&
            this.queensGame.map(
              (queenGame) => html`
                <div class="game-card ">
                  <div class="card-back card-face">
                    <img
                      class="back-img"
                      src="./../../assets/images/popartru.jpg"
                      alt="RuPaul pop art image"
                    />
                  </div>
                  <div class="card-front card-face">
                    <img
                      class="front-img value"
                      src=${queenGame.image_url}
                      alt=${queenGame.name}
                    />
                  </div>
                </div>
              `
            )
          }
        </div>
      </button>`;
  }
}
customElements.define("drag-memory", DragMemoryComponent);
