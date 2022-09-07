import { Component } from "react";
import './styles.css';
import Logo from './Logo'
import Carro from './Carro'

class NavBar extends Component{
    render(){
        const {carro, carroVisible,mostrarCarro} = this.props
        return(
            <nav className="navbar"> 
                <Logo />
                <Carro 
                    carro={carro}
                    carroVisible={carroVisible}
                    mostrarCarro={mostrarCarro}
                />
            </nav>
            
        )
    }
}
export default NavBar;