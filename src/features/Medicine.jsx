import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMedicine, increaseCount, decreaseCount } from "./medicineSlice";

function Medicine() {
  const medicines = useSelector((state) => state.sliceMedicine.medicines);

  const dispatch = useDispatch()

  return (
    <>
      {medicines.map((medicine) => (
        <div
          key={medicine.id}
          id="medicine"
          className="bg-orange-400 px-4 py-2 flex justify-between items-center gap-8 text-white rounded-xl font-semibold w-full"
        >
          <p>
            {medicine.medicine} - <span className="font-bold">{medicine.count} done</span>
          </p>
          <div id="buttons" className="flex sm:flex-row flex-col">
            <button className="bg-white text-orange-400 font-bold rounded-lg ml-4 py-1 px-2 flex justify-center items-center" onClick={() => dispatch(decreaseCount(medicine.id))}>
              <ion-icon name="remove-outline"></ion-icon>
            </button>
            <button className="bg-white text-orange-400 font-bold rounded-lg ml-4 py-1 px-2 flex justify-center items-center sm:my-0 my-2" onClick={() => dispatch(increaseCount(medicine.id))}>
              <ion-icon name="add-outline"></ion-icon>
            </button>
            <button className="bg-white text-orange-400 font-bold rounded-lg ml-4 py-1 px-2 flex justify-center items-center" onClick={() => dispatch(deleteMedicine(medicine.id))}>
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Medicine;

{
  /* <div
      id="medicine"
      className="bg-orange-400 px-4 py-2 flex justify-between items-center gap-8 text-white rounded-xl font-semibold"
    >
      <p>
        Bada wala medicine - <span className="font-bold">0 done</span>{" "}
      </p>
      <div id="buttons" className="flex sm:flex-row flex-col">
        <button className="bg-white text-orange-400 font-bold rounded-lg ml-4 py-1 px-2 flex justify-center items-center">
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <button className="bg-white text-orange-400 font-bold rounded-lg ml-4 py-1 px-2 flex justify-center items-center sm:my-0 my-2">
          <ion-icon name="add-outline"></ion-icon>
        </button>
        <button className="bg-white text-orange-400 font-bold rounded-lg ml-4 py-1 px-2 flex justify-center items-center">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div> */
}
