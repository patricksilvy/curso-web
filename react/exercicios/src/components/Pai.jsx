import React from "react"
import {childrenWithProps} from '../utils'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>