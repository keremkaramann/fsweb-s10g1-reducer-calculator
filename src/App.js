import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index.js";
import { applyNumber, applyOperation, clearDisplay } from "./actions";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddOne = (num) => {
    dispatch(applyNumber(num));
  };
  const handleOperators = (type) => {
    dispatch(applyOperation(type));
  };
  const handleClear = () => {
    dispatch(clearDisplay());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAddOne(1)} />
              <CalcButton value={2} onClick={() => handleAddOne(2)} />
              <CalcButton value={3} onClick={() => handleAddOne(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAddOne(4)} />
              <CalcButton value={5} onClick={() => handleAddOne(5)} />
              <CalcButton value={6} onClick={() => handleAddOne(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAddOne(7)} />
              <CalcButton value={8} onClick={() => handleAddOne(8)} />
              <CalcButton value={9} onClick={() => handleAddOne(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperators("+")} />
              <CalcButton value={"*"} onClick={() => handleOperators("*")} />
              <CalcButton value={"-"} onClick={() => handleOperators("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
