import React from 'react'
import {Link} from 'react-router-dom'
import '../login/loginPageEstilo.css'

function RegisterPetP1(){
    return (
        <div className={'caixa-mae'}>
           <div className={'caixa-mae-esquerda'}>
                <div className={'caixa-mae-esquerda-logo'}>
                    <div className={'imagem-logo-registerPet1'} >
                    </div>
                </div>
            </div>
            <div className={'caixa-mae-direita'}>
                <div className={'caixa-mae-direira-container'}>
                    <div className={'caixa-mae-direira-container-titulo'}>
                        <h1>Cadastro PET</h1>
                        <h3>Informações do pet</h3>
                    </div>
                    <div className={'caixa-mae-direira-container-input'}>
                        <input type={'text'}  placeholder={'Nome'}/>
                        <input type={'text'} placeholder={'Idade'}/>
                        <textarea className={'txt-area'} placeholder={'Por que adotar?'}/>
                    </div>
                    <div className={'caixa-mae-direira-container-links'}>
                        <button className={'btnEntrar'}><Link className={'link'} to="/registerPetP2">Continuar</Link></button>
                        <a href={() => false} className={'link-cadastrar'}><Link className={'link'} to="/userLog">Voltar</Link></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPetP1;