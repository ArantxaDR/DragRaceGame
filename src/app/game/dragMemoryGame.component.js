import { css, html, LitElement } from "lit";
import { QueensService } from "./../Queens/queens.service";
import "./../../assets/images/popartru.jpg";
import "./../../assets/images/pride-flag.jpg";

export class DragMemoryComponent extends LitElement {
  constructor() {
    super();
    this.flips;
    this.timer;
    this.service = new QueensService();
  }
  static get properties() {
    return { flips: { type: Number }, queens: { type: Object } };
  }

  static get styles() {
    return css`
      .game-title {
        text-align: center;
      }
      .game-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
      }
      .game-grid {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(2, auto);
        grid-gap: 1rem;
        justify-content: center;
        margin: 0.7rem;
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
      .game-card.matched .value {
        animation: dance 1s linear infinite 500ms;
      }
      .overlay-text {
        display: none;
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
      @keyframes dance {
        0%,
        100% {
          transform: rotate(0);
        }
        25% {
          transform: rotate(-30deg);
        }
        75% {
          transform: rotate(30deg);
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
          grid-template-columns: repeat(4, auto);
        }
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.queens = await this.service.getQueens();
  }

  render() {
    return html`<h1 class="game-title">Are you a winner?</h1>
      <div class="overlay-text visible">Click to start</div>
      <div id="game-over" class="overlay-text ">
        Shasay away<span class="overlay-text-small">Click to restart</span>
      </div>
      <div id="victory" class="overlay-text">
        Shantay, you stay<span class="overlay-text-small"
          >Click to restart</span
        >
      </div>

      <div class="game-info">
        <h3 class="game-flips">Flips: <span>${this.flips}</span></h3>
        <h3 class="game-timer">Time <span>${this.timer}</span></h3>
      </div>
      <div class="game-grid">
        <div class="game-grid">
          <div class="game-card visible ">
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
                src="./../../assets/images/pride-flag.jpg"
                alt="Pride flag"
              />
            </div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>
          <div class="game-card">
            <div class="card-back card-face">
              <img
                class="back-img"
                src="./../../assets/images/popartru.jpg"
                alt="RuPaul pop art iamge"
              />
            </div>
            <div class="card-front card-face"></div>
          </div>

          <!-- 
      <button @click="${(e) => this.clickMe(e)}>">WIN</button> -->
        </div>
      </div>`;
  }
  // clickMe(e) {
  //   console.log(e);
  //   const message = new CustomEvent("queens:message", {
  //     bubbles: true,
  //     detail: {
  //       msg: "BAAAM"
  //     }
  // });
  // this.dispatchEvent(message);
}
customElements.define("drag-memory", DragMemoryComponent);
