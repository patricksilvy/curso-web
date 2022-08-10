import React from 'react'
import ReactDOM from 'react-dom/client'

import Multi, { BoaTarde, BoaNoite } from './components/Multiplos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BoaTarde nome="Ana" />
    <BoaNoite nome="Bia" />
  </div>
)
