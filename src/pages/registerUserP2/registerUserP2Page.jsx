import React from 'react'
import {Link} from 'react-router-dom'
import '../login/loginPageEstilo.css'

function RegisterUserP2(){
    return (
        <div className={'caixa-mae'}>
           <div className={'caixa-mae-esquerda'}>
                <div className={'caixa-mae-esquerda-logo'}>
                    <div className={'imagem-logo-register2'} >
                    </div>
                </div>
            </div>
            <div className={'caixa-mae-direita'}>
                <div className={'caixa-mae-direira-container'}>
                    <div className={'caixa-mae-direira-container-titulo'}>
                        <h1>Cadastro</h1>
                        <h3>Insira suas informações</h3>
                    </div>
                    <div className={'caixa-mae-direira-container-input'}>
                        <input type={'number'}  placeholder={'Telefone'}/>
                        <input type={'email'} placeholder={'Email'}/>
                        <input type={'password'} placeholder={'********'}/>
                    </div>
                    <div className={'caixa-mae-direira-container-links'}>
                        <button className={'btnEntrar'}><Link className={'link'} to="/userLog">Cadastrar</Link></button>
                        <a href={() => false} className={'link-cadastrar'}><Link className={'link'} to="/registerUserP1">Voltar</Link></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterUserP2;