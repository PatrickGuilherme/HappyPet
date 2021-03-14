import React from 'react'
import {Link} from 'react-router-dom'

const data = [
    {
        nome: 'Robervaldo',
        tipo: 'Cachorro rebaixado'
    },
    {
        nome: 'Severino',
        tipo: 'Cachorrin fi da mae'
    },
    {
        nome: 'Onça',
        tipo: 'bixo brabo'
    }
]

const ListPet = () =>{
    return (
        <div>
            <div className={'caixaConteudo'}>
                <div className={'caixaImagem'}>
                </div>
                <div className={'caixaInfo'}>
                    <div>
                        <h1><strong>Nome do animal</strong></h1>
                        <div className={'caixaInfoTipoAnimal'}>
                            <p><strong>Tipo:</strong></p>
                            <p>nome do tipo</p>
                        </div>
                    </div>
                </div>                
            </div>
            <div className={'caixaConteudo'}>
                <div className={'caixaImagem'}>
                </div>
                <div className={'caixaInfo'}>
                    <div>
                        <h1><strong>Nome do animal</strong></h1>
                        <div className={'caixaInfoTipoAnimal'}>
                            <p><strong>Tipo:</strong></p>
                            <p>nome do tipo</p>
                        </div>
                    </div>
                </div>                
            </div>
            <div className={'caixaConteudo'}>
                <div className={'caixaImagem'}>
                </div>
                <div className={'caixaInfo'}>
                    <div>
                        <h1><strong>Nome do animal</strong></h1>
                        <div className={'caixaInfoTipoAnimal'}>
                            <p><strong>Tipo:</strong></p>
                            <p>nome do tipo</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default ListPet;