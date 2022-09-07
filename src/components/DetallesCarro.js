import { Component } from "react";
import './styles.css';

class DetallesCarro extends Component{
    render(){
        const {carro} = this.props;
        return(
            <div className="detallesCarro">
                <ul className="ul">
                    {carro.map(x => 
                        <li className="product" key={x.name}>
                            <img alt={x.name} src={x.img}  width='50' height='32' />
                            {x.name}
                            <span> {x.cantidad}</span>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default DetallesCarro;