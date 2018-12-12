import React, { Component } from 'react';
requestAnimationFrame("../static/css/Schedule.css")
class Schedule extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((schedule)=> {
                        return (
                            <div className={this.props.isCompleted ? "completed" : "task"}>
                                <p>{'Task: ' + Schedule.name}</p>
                                <p>{'Due: ' + Schedule.name}</p>
                                <p>{'Category: ' + Schedule.name}</p>
                                <div className ="last-row">
                                    <input
                                        type="checkbox"
                                        onChange={() => { this.props.toggleCheckBox(schedule)}}
                                        checked = {this.props.isCompleted}
                                    />
                                </div>
                                <div
                                className="last-row"
                                onClick={()=>{this.props.deleteTask(schedule)}}>
                                    <i className="material-icons">delete</i>
                                </div>
                                <hr width ="100%" />
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Schedule;