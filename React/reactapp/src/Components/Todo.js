import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ id: 1, task: "Revise Javascript" }, { id: 2, task: "Revise Dsa level 1" }],
            currentTask:""
        };
    }


    // deleteTask = (e) => {
    //     console.log(e.target);
    //     let filtered = this.state.tasks.filter((obj) => e.currentTarget.id !== obj.id);
    //     this.setState = {
    //         tasks: filtered
    //     }
    // }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currentTask: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            tasks:[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.currentTask}]
        })
        this.state.currentTask="";
    }

   

    render() {
        return (
            <div>
                <input type="text" value={this.state.currentTask} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                {
                    this.state.tasks.map(({ id, task }) => {
                        return (
                            <div key={id}>
                                <p>{task}</p>
                                <button>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
