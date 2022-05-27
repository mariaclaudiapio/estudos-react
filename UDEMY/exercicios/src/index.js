import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai2'
import Filho from './componentes/Filho2'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
    </div>, document.getElementById('root')) //esse <h1> aqui não é html, é um jsx. 


