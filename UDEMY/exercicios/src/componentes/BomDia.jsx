import React, { Fragment } from 'react'

export default props => [
<h1 key='saudação'>Bom dia, {props.nome}, você tem {props.idade} anos!</h1>,
<h2 key='despedida'>Até mais! Forte abraço! </h2>
] //pode ser usado um array para revestir duas tags.

/* usando fragment: 
<Fragment>
<h1>Bom dia, {props.nome}, você tem {props.idade} anos!</h1>
<h2>Até mais! Forte abraço! </h2>
</Fragment>
*/

/* usando div:
<div>
<h1>Bom dia, {props.nome}, você tem {props.idade} anos!</h1>
<h2>Até mais! Forte abraço! </h2>
</div>
*/