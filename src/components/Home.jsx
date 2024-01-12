import { Link } from "react-router-dom";

export default function Home() {
  const cl = console.log.bind();
  let eve = "";

  function notReally(event) {
    const button = event.target;

    const posX =
      Math.floor(
        Math.random() * (window.innerWidth / 3 - -(window.innerWidth / 2) + 1)
      ) + -(window.innerWidth / 2);
    const posY =
      Math.floor(
        Math.random() * (window.innerHeight / 3 - -(window.innerHeight / 2) + 1)
      ) + -(window.innerHeight / 2);

    button.style.transform = `translate(${posX}px, ${posY}px)`;
  }

  if (window.innerWidth < 350) {
    return (
      <>
        <h1>You are awesome!!!</h1>
        <div className="theButtons">
          <Link to={"/absolutely"}>
            <button className="btn" id="button1">
              Absolutely!
            </button>
          </Link>
          <button className="btn" id="button2" onClick={notReally}>
            Not Really
          </button>
        </div>
      </>
    );
  }

  else {
    return (
      <>
        <h1>You are awesome!!!</h1>
        <div className="theButtons">
          <Link to={"/absolutely"}>
            <button className="btn" id="button1">
              Absolutely!
            </button>
          </Link>
          <button className="btn" id="button2" onMouseOver={ notReally }>
            Not Really
          </button>
        </div>
      </>
    );
  }
}
