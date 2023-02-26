import React from 'react';
import editLogo from '../assets/edit.png';
import deleteLogo from '../assets/delete.png';

function RowTableCRUD({ el , setDataToEdit, deleteData}) {
    const buttonStyle = {
        width:"50%", 
        backgroundColor:"#212529",
        padding: "0px",
    }

    const imgStyle = {
        width:"25px", 
        padding: "0px",
    }

    let { nameAnimal, typeAnimal, id } = el;

    return (
        <tr>
            <td>{nameAnimal}</td>
            <td>{typeAnimal}</td>
            <td><button onClick={()=> setDataToEdit(el)} style={buttonStyle}><img style={imgStyle} src={editLogo}/></button></td>
            <td><button onClick={()=> deleteData(id)} style={buttonStyle}><img style={imgStyle} src={deleteLogo}/></button></td>
        </tr>
    );
}

export default RowTableCRUD;