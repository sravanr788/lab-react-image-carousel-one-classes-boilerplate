import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super();

        // set an initial state
        this.state = {
            currIndex : 0
        }
    }
    increaseindex = () => {
        console.log("clicked")
        //if index is equal to the last index then setting it back to the starting point is 0
        if((this.state.currIndex)==images.length - 1){
            this.setState({
                currIndex : 0,
            })
        }else{
            this.setState({
                currIndex : this.state.currIndex + 1
            })
        }
       
    }
    decreaseindex = () => {
        if((this.state.currIndex)==0){
            this.setState({
                currIndex : images.length-1,
            })
        }else{
            this.setState({
                currIndex : this.state.currIndex - 1
            })
        }
    }

    componentDidUpdate(){
        console.log(this.state)
    }

  render(){
    return (
        <>
        <div className="caraousel-container flex">
            <div className="leftarrow arrowdiv flex"><ArrowBackIosIcon className="white" onClick={this.decreaseindex}/></div>
            <h1 className="title">{images[this.state.currIndex].title}</h1>
            <img src={images[this.state.currIndex].img} alt="" />
            <h4 className="caption">{images[this.state.currIndex].subtitle}</h4>
            <div className="rightarrow arrowdiv flex"><ArrowForwardIosIcon className="white" onClick={this.increaseindex}/></div>
        </div>
        </>
    )
  }
}

export default Carousel;