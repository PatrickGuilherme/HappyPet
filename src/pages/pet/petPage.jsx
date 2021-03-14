import React from 'react'
import {Link} from 'react-router-dom'
import './petPageEstilo.css'
import imgPet from '../../bgmain.png'

function PetPage(){
    return (
        <div className={'divMain'}>
            <div className={'divInfoBlue'}>
                <div className={'divfotoBixo'}>
                    <img className={'fotoPet'} src={imgPet}/>
                </div>
                <h2>Nome animal</h2>
                <div className={'divDadosPet'}>
                    <div className={'divConteudo'}>
                        <div><strong>Raça:</strong></div>
                        <div>Nome da raça</div>
                    </div>
                    |
                    <div className={'divConteudo'}>
                        <div><strong>Idade:</strong></div>
                        <div>Idade do animal</div>
                    </div>
                    |
                    <div className={'divConteudo'}>
                        <div><strong>Tipo:</strong></div>
                        <div>Tipo do animal</div>
                    </div>                                               
                </div>
            </div>
            <div className={'divInfoWhite'}>
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
                <div className={'divInfoWhiteConteudo'}>
                    <h1>Porque Adotar?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                     since the 1500s, when an unknown printer took a galley of type and 
                     scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
                     text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer
                     took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={'divInfoWhiteConteudo'}>
                    <h1>Historico</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={'divVermais'}>
                    <button className={'btnVerMais'}><Link className={'linkVerMais'} to={'/UserLog'}>Voltar</Link></button>
                </div>  
            </div>
        </div>
    );
}

export default PetPage;