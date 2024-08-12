import { useRef } from "react";
import Medicine from "./features/Medicine";
import { useDispatch } from "react-redux";
import { addMedicine } from "./features/medicineSlice";
import { nanoid } from "@reduxjs/toolkit";

function App() {

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  function handleChange(e) {
    inputRef.current.value = e.target.value;
  }

  function handleClick() {
    const inputValue = inputRef.current.value.trim();

    if(inputValue) {
      dispatch(addMedicine({id: nanoid(), medicine: inputRef.current.value, count: 0}))
    }

    inputRef.current.value = '';
  }

  return (
    <>
      <main className="max-w-[1100px] h-full mx-auto sm:p-[2rem] p-[1rem]">
        <header className="w-full bg-orange-400 text-center rounded-xl sm:p-[2rem] p-[1rem] shadow-lg">
          <h1 className="sm:text-[2rem] text-[1.5rem] font-bold text-white">
            Medicine Tracker
          </h1>
          <p className="text-white sm:text-[1rem] text-[0.6rem] opacity-[0.8]">
            Never let's you forget your medication
          </p>
        </header>

        <div
          id="input-field"
          className="mt-[2rem] max-w-[700px] text-center mx-auto flex justify-center items-center sm:p-[2rem] "
        >
          <input
            type="text"
            placeholder="Enter medicine"
            className="w-[70%] border border-orange-300 outline-none py-[0.5rem] px-[0.5rem] sm:px-[1rem] rounded-l-xl text-gray-600"
            ref={inputRef}
            onChange={handleChange}
            onKeyDown={(e) => {
              if(e.key === "Enter") {
                handleClick()
              }
            }}
          />
          <button className="bg-orange-400 text-white rounded-r-xl py-[0.5rem] sm:px-[1rem] px-[0.5rem] border border-orange-400 font-bold" onClick={handleClick}>
            Add +
          </button>
        </div>

        <div
          id="medicine-container"
          className="bg-orange-50 max-w-[100%] mx-auto rounded-xl mt-4 p-4 flex justify-center flex-wrap gap-8"
        >
          <Medicine />
        </div>
      </main>
    </>
  );
}

export default App;
