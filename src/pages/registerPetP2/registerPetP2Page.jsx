import React from 'react'
import {Link} from 'react-router-dom'
import '../login/loginPageEstilo.css'
import imgInput from './imgUpload.jpg'

function RegisterPetP2(){
    return (
        <div className={'caixa-mae'}>
           <div className={'caixa-mae-esquerda'}>
                <div className={'caixa-mae-esquerda-logo'}>
                    <div className={'imagem-logo-registerPet2'} >
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
                        <textarea className={'txt-area'} placeholder={'Histórico'}/>
                        <input id={'input-foto'} type={'image'} src={imgInput} placeholder={'Foto'}/>

                    </div>
                    <div className={'caixa-mae-direira-container-links'}>
                        <button className={'btnEntrar'}><Link className={'link'} to="/userLog">Cadastrar</Link></button>
                        <a href={() => false} className={'link-cadastrar'}><Link className={'link'} to="/registerPetP1">Voltar</Link></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPetP2;