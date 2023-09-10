import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Bad practice
  // const [test] = useState({ name: "Shohag" });

  // Good practice
  // const [test, setTest] = useState({ name: "Shohag" });

  function handlePrevious() {
    step > 1 && setStep((currentStep) => currentStep - 1);
  }

  function handleNext() {
    step < 3 && setStep((currentStep) => currentStep + 1);

    //Bad practice
    // test.name = "Dipta";

    // Good practice
    // setTest({ name: "Dipta" });
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "white" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
