import React from 'react'
import {Link} from 'react-router-dom'
import './userLogPageEstilo.css'
import ListaPet from './componentes/dadosComponente'

function UserLog(){
    return (
        <div className={'divPai'}>
            <div className={'divBotoes'}>
                <button className={'btnCadPet'}>
                    <Link className={'linkCadPet'} to={'/registerPetP1'}>
                        Cadastrar pet
                    </Link>
                </button>
                <button className={'btnSair'}>
                    <Link className={'linkSair'} to={'/'}>
                        Sair
                    </Link>
                </button>
            </div>
            <div className={'divLogo'}></div>
            
            <input className={'inputPesquisaTxt'} type={'text'} placeholder={'Pesquise um pet para adotar'}/>
            
            <ListaPet/>

            <div className={'divVermais'}>
                <button className={'btnVerMais'}><Link className={'linkVerMais'} to={'/UserLog'}>Ver mais</Link></button>
            </div>
        </div>
    );
}

export default UserLog;