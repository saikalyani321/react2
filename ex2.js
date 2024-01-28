
import React,{Component} from "react";
import './ex2.css';
const C = class ex2 extends Component
{
    constructor(){
        super()
        this.state ={
            name : 12
        }
    }

    handleButtonClick = () => {
        this.setState({
          name: this.state.name + 1
        })
      }

    handleBtnClick = () => {
        this.setState({
          name: this.state.name - 1
        })
    }
    render(){
        return(

            <div className = "App">
                <header className = "App-header">

                    <button onClick={this.handleButtonClick} id = "b1">+</button>
                    <button onClick= { this.handleButtonClick} id = "b2">{this.state.name}</button>
                    <button onClick={this.handleBtnClick} id = "b3"> - </button>
                </header>
            </div>
        )
    }
}

export default C
