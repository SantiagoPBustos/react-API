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

    useEffect(() => {
        api.get(url)
            .then(response => {
                if (!response.error) {
                    setDataBase(response);
                    setError(null);
                } else {
                    setDataBase(null);
                    setError(response);
                }
                setLoading(false);
            })
    }, []);

    const createData = (data) => {
        data.id = Date.now();

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        }
        api.post(url, options).then(response => {
            if (!response.error) {
                setDataBase(...dataBase, response);
            } else {
                setError(response);
            }
        });
    }
    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        }

        api.put(endpoint, options).then(response => {
            if (!response.error) {
                let dataUpdated = dataBase.map((el) => (el.id === data.id ? data : el));
                setDataBase(dataUpdated);
            } else {
                setError(response);
            }
        });
    }
    const deleteData = (id) => {
        let isDelete = confirm(`Sure that u want delete this data whit ${id}?`);

        if (isDelete) {

            let endpoint = `${url}/${id}`

            let options = {
                headers: { "content-type": "application/json" },
            }

            api.del(endpoint,options).then(responde => {
                if(!responde.error){
                    let newData = dataBase.filter(el => el.id !== id);
                    setDataBase(newData);
                }else{
                    setError(responde);
                }
            });
        } else {
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
                            setDataToEdit={setDataToEdit} />
                    </Col>

                    {loading && <Col><Loader /></Col>}

                    {error && <Col><ErrorMessage msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor="#dc3545" /></Col>}

                    <Col xs={7}>
                        {dataBase &&
                            <TableCRUD
                                data={dataBase}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData} />}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default APICrud;