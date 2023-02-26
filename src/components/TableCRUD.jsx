import React from 'react';
import Table from 'react-bootstrap/Table'
import RowTableCRUD from './RowTableCRUD';

function TableCRUD({ data, setDataToEdit, deleteData }) {
    return (
        <>
            <h3 className='mt-4'>Animal Data</h3>
            <Table variant="dark" className="m-auto" striped bordered hover>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Nombre</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el) => <RowTableCRUD key={el.id} 
                    el={el} 
                    setDataToEdit={setDataToEdit} 
                    deleteData={deleteData} 
                    />)}
                </tbody>
            </Table>
        </>
    );
}

export default TableCRUD;


