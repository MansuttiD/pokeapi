import React from 'react'
import { Link } from 'react-router-dom'
import img from '/404/pokeball-png.png'
import './styles/pokemon404.css'
import { BiArrowBack } from 'react-icons/bi'


const Pokemon404 = () => {
    return (
        <div className='poke__container'>
            <div className='poke__container-items'>
                <h2 className='poke__title'><span className='poke__span'>4</span><img className='poke__img' src={img} alt="pokeball" /><span className='poke__span'>4</span></h2>
                <span className='poke__span-title'>Uh-Oh</span>
                <p className='poke__p'>You look lost on your journey!</p>
                <Link to='/pokedex' >
                    <button className='poke__button'> <BiArrowBack/> Go Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Pokemon404 