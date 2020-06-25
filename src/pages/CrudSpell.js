import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase';
import ItemSpell from '../components/ItemSpell';

function CrudSpell() {

    const [spells, setSpells] = useState([])
    const [nameSpell, setNameSpell] = useState('')

    useEffect(() => {
        const fireData = async () => {
            const db = firebase.firestore()
            const data = await db.collection('spells').get()
            setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        fireData()
    }, [])

    console.log(spells);


    const cargarSpell = () => {

    }

    const crearSpell = ()=> {

    }

    return (
        <div>
            <form className="my-3" >
                <input type="text"  value={nameSpell} onChange={cargarSpell}  />
                <button className="btn btn-secondary" onClick={crearSpell}  >  Crear Spell </button>

            </form>

            <h3>Lista de Spells</h3>
            <ItemSpell spells={spells} />
        </div>
    )
}

export default CrudSpell
