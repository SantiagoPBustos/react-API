import React, { useState, useEffect } from 'react';
import FormCRUD from './FormCRUD';
import TableCRUD from './TableCRUD';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import { HelperHTTP } from '../helpers/helpHTTP';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const APICrud = () => {
    const [dataBase, setDataBase] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    let url = "http://localhost:3000/animals";

    let api = HelperHTTP();

    useEffect(()=>{
        api.get(url)
        .then(response => {
            if (!response.error) {
                setDataBase(response);
                setError(null);
            }else{
                setDataBase(null);
                setError(response);
            }
            setLoading(false);
        })
    },[]);

    const createData = (data) => {
        data.id = Date.now();
        setDataBase([...dataBase, data]);
    }
    const updateData = (data) => {
        let dataUpdated = dataBase.map((el) => (el.id === data.id ? data : el));
        setDataBase(dataUpdated);
    }
    const deleteData = (id) => { 
        let isDelete = confirm(`Sure that u want delete this data whit ${id}?`);

        if (isDelete) {
            let newData = dataBase.filter(el => el.id !== id);
            setDataBase(newData);
        }else{
            return;
        }
    }

    return (
        <>
            <Container className='m-auto'>
                <Row><h3>Application CRUD whit React JS</h3>

                </Row>
                <Row>
                    <Col>

                    <FormCRUD
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}/>
                    
                    </Col>

                    {loading && <Loader/>}

                    {error && <ErrorMessage/>}

                    <Col xs={7}>
                        {dataBase && 
                        <TableCRUD
                        data={dataBase}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}/>}
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default APICrud;