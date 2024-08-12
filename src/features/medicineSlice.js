import { createSlice } from "@reduxjs/toolkit";

const medicineSlice = createSlice({
  name: 'Medicine Tracker',
  initialState: {
    medicines: []
  },
  reducers: {

    addMedicine: (state, action) => {
      state.medicines = [...state.medicines, action.payload];
    },

    deleteMedicine: (state, action) => {
      state.medicines = state.medicines.filter((medicine) => medicine.id !== action.payload)
    },

    increaseCount: (state, action) => {
      state.medicines = state.medicines.map((medicine) => medicine.id === action.payload ? {...medicine, count: medicine.count + 1} : medicine)
    },

    decreaseCount: (state, action) => {
      state.medicines = state.medicines.map((medicine) => {
        if(medicine.id === action.payload) {
          if(medicine.count > 0) {
            return {...medicine, count: medicine.count - 1}
          }
          else{
            return medicine;
          }
        }
        return medicine;
      })
    }

  }
})

export const { addMedicine, deleteMedicine, increaseCount, decreaseCount } = medicineSlice.actions;
export default medicineSlice.reducer