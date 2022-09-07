import { Component } from "react";
import './styles.css';
import Button from './Button'


/* const styles = {
    producto:{
        border: 'solid 1px #eee',
        boxShadow:'0 5px 5px rgb(0,0,0,0.1)'
    }
}
 */
class Producto extends Component{
    render(){
        const {producto,agregarAlCarro} = this.props
        return(
            <div className="producto">
                <img className="img" alt={producto.nombre} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button
                    onClick={()=>agregarAlCarro(producto)}
                > Agregar al Carro </Button>
            </div>
        )
    }
}

export default Producto;