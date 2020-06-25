import React, {useState} from 'react'
import firebase from '../config/firebase'

function ItemSpell({ spells }) {
    return (
        <ol>
            {spells.map(e_spell => (
                <li key={e_spell.id} className="my-2" >
                    <Spell e_spell={e_spell} />
                </li>
            ))}
        </ol>
    )
}
export default ItemSpell




function Spell({e_spell}) {

    const [name, setName] = useState(e_spell.name)

    const cargarDatos = (e) => {
        setName(e.target.value)
    }

    const updateData = () => {
        const db = firebase.firestore()
        db.collection('spells').doc(e_spell.id).set({...e_spell, name})
    }

    const deleteData = () => {
        const db = firebase.firestore()
        db.collection('spells').doc(e_spell.id).delete()
    }

    return (
        <div>
            <input type="text" value={name} onChange={cargarDatos} />
            <button className="btn btn-info"  onClick={updateData} >Editar </button>
            <button className="btn btn-danger"  onClick={deleteData} >Eliminar </button>
        </div>
    )
}
