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
                        <th colSpan="2">Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((el) => (
                            <RowTableCRUD key={el.id}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TableCRUD;


