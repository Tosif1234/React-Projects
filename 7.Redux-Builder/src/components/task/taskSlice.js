import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice ({
    name : 'task',
    initialState : {
        tasks : []
    },

    reducers :{
        addTask : (state, action) =>{
            const task = action.payload;
            state.tasks.push(task);
        },

        toggleTask : (state, action) =>{
            const id = action.payload;
            const task =  state.tasks.find(t => t.id === id);

            if(task){
                task.completed = !task.completed;
            }
        },

        deleteTask : (state , action) =>{
            const task = action.payload;

            state.tasks = state.tasks.filter(t => t.id !== task);
        }
    }
});

export const {addTask,toggleTask,deleteTask} = taskSlice.actions;

export default taskSlice.reducer;