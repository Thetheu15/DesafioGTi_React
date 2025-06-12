import React, {Component} from 'react';
import './apoiadores.css'
import imagemNitendo from './assets/Nintendo.svg.png';
import imagemPlayStation from './assets/PlayStation_Studios_logo.svg.png';
import imagemBendStudios from './assets/409e85f6-a8c5-11ee-ac10-02420a000156.webp';


class Apoiadores  extends Component{
    render(){
        return (
            <div class = "container_principal_apoiadores">
            <img class = "img_apoiadores" src = {imagemPlayStation} />
            <img class = "img_apoiadores" src = {imagemNitendo} />
            <img class = "img_apoiadores" src = {imagemBendStudios} />
            </div>
        )
    }
}

export default Apoiadores;