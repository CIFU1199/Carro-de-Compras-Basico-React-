import { Component } from "react";
import './styles.css';
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

class Carro extends Component{
    render(){
        const {carro , carroVisible,mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span className="bubble">
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad}/> : null
                    }
                    
                </span>
                <button 
                    className="carro"
                    onClick={mostrarCarro}
                >
                    Carro
                </button>
                {carroVisible ? <DetallesCarro carro={carro}/> : null}
                
            </div>
        )
    }
}

export default Carro;