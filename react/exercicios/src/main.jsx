import React from 'react'
import ReactDOM from 'react-dom/client'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Pai nome="Anderson" sobrenome="Silva">
      <Filho nome="Pedro"/>
      <Filho nome="Anderson"/>
      <Filho nome="Carla"/>
    </Pai>
  </div>
)
