import React from 'react';
import editLogo from '../assets/edit.png';
import deleteLogo from '../assets/delete.png';

function RowTableCRUD({ el , setDataToEdit, deleteData}) {

    let { nameAnimal, typeAnimal, id } = el;

    return (
        <tr>
            <td>{nameAnimal}</td>
            <td>{typeAnimal}</td>
            <td><button onClick={()=> setDataToEdit(el)}>Editar</button></td>
            <td><button onClick={()=> deleteData(id)}>Borrar</button></td>
        </tr>
    );
}

export default RowTableCRUD;