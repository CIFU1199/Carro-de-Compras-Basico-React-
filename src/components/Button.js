import { Component } from "react";
import './styles.css';

class Button extends Component{
    render(){
        return(
            <button className="button" {...this.props} />
        )
    }
}

export default Button;