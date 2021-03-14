import React from 'react'
import {Link} from 'react-router-dom'
import '../login/loginPageEstilo.css'

function Login(){
    return (
        <div className={'caixa-mae'}>
           <div className={'caixa-mae-esquerda'}>
                <div className={'caixa-mae-esquerda-logo'}>
                    <div className={'imagem-logo-login'}>
                    </div>
                </div>
            </div>
            <div className={'caixa-mae-direita'}>
                <div className={'caixa-mae-direira-container'}>
                    <div className={'caixa-mae-direira-container-titulo'}>
                        <h1>Login</h1>
                        <h3>Seja Bem Vindo!</h3>
                    </div>
                    <div className={'caixa-mae-direira-container-input'}>
                        <input type={'text'}  placeholder={'E-mail'}/>
                        <input type={'password'} placeholder={'********'}/>
                    </div>
                    <div className={'caixa-mae-direira-container-links'}>
                        <button className={'btnEntrar'}><Link className={'link'} to="/userLog">Entrar</Link></button>
                        <a href={() => false} className={'link-cadastrar'}><Link className={'link'} to="/registerUserP1">Cadastrar-se</Link></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;