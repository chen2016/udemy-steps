import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function previousClicked() {
    if ((step % 3) - 1 < 0) {
      setStep((step % 3) + 3 - 1);
    } else {
      setStep((step % 3) - 1);
    }
  }

  function nextClicked() {
    setStep((step % 3) + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          className={step === 1 ? "disabled" : "enabled"}
          onClick={previousClicked}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          className={step === 3 ? "disabled" : "enabled"}
          onClick={nextClicked}
          disabled={step === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
