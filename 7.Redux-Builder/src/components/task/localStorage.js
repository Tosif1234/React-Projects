export const loadData = () =>{
    try {
        const data = localStorage.getItem("Tasks");
        return data ? JSON.parse(data) : {tasks:[]};
    } 
    catch (error) {
        return {tasks:[]};
    }
}

export const saveData = (state) =>{ 
    try {
        localStorage.setItem("Tasks",  JSON.stringify(state));
    } 
    catch (error) {
        console.error("Save Failed !!");
        
    }
}

