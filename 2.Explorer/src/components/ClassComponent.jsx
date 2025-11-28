import React from "react";

class Counter extends React.Component{

    constructor(){
        super();
        this.state = {count : 0}
    }
    increament = () =>{
        this.setState({count : this.state.count + 1});
    }
    decreament = () =>{
        this.setState({count : this.state.count - 1});
    }
    
    render(){
         return (
      <div className="mt-14 w-[100%] mx-auto p-6 bg-[#0f1a2b] rounded-2xl shadow-md text-center">

        <h2 className="text-3xl font-bold text-indigo-300 underline-offset-8">
          Class Component Counter
        </h2>

        <h3 className="text-2xl font-semibold mt-5 text-cyan-300">
          Count : {this.state.count}
        </h3>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={this.decreament}
            className="bg-red-600 hover:bg-red-700 transition-all px-6 py-2 rounded-lg text-white font-medium"
          >
            Decrement
          </button>

          <button
            onClick={this.increament}
            className="bg-emerald-600 hover:bg-emerald-700 transition-all px-6 py-2 rounded-lg text-white font-medium"
          >
            Increment
          </button>
        </div>
      </div>
    );
    }
}

export default Counter;