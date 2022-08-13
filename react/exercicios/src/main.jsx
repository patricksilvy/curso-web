import React from 'react'
import ReactDOM from 'react-dom/client'

import Saudacao from './components/Saudacoes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Saudacao tipo="Bom dia" nome="João"/>
  </div>
)
