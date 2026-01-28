import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../components/task/taskSlice"
import { loadData, saveData } from "../components/task/localStorage";

export const store = configureStore({
    reducer : {
        task : TaskReducer
    },
    preloadedState : {
        task : loadData()
    }
})

store.subscribe(()=>{
    saveData(store.getState().task);
})


