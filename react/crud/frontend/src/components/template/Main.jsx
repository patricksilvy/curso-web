import './Main.css'
import Header from './Header'
import React from 'react'

export default props => 
    <React.Fragment>
        <Header {...props} />
        <main className='content'>
            Conteúdo
        </main>
    </React.Fragment>