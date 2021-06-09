import React from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from 'reactstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Listproduto (props) {
  const [data, setData] = useState ([]);

  useEffect (() => {
      const GetData = async () => {
      const result = await axios ('https://localhost:44350/api/Produtos');
      setData (result.data);
    };
    GetData ();
  }, []);

  const deleteproduto = id => {
    //debugger;
    axios.delete('https://localhost:44350/api/Produtos/'+id)
      .then ((result) => {props.history.push ('/Listproduto');});
  };

  const editproduto = id => {
    props.history.push ({pathname: '/edit/' + id});
  };

  return (
      <div className="animated fadeIn">
          <Row>
              <Col>
                  <Card>
                     <CardHeader>
                          <i className="fa fa-align-justify"></i>
                          Lista de Produtos
                     </CardHeader>
                     <CardBody>
                         <table >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>DESCRIÇÃO</th>
                                    <th>UNIDADE</th>
                                    <th>QUANTIDADE</th>
                                    <th>VALOR</th>
                                </tr>
                            </thead>
                            <tbody> 
                              {
                               data.map((item, idx) => {
                                  return <tr>
                                      <td>{item.id}</td>
                                      <td>{item.descricao}</td>
                                      <td>{item.unidade}</td>
                                      <td>{item.quantidade}</td>
                                      <td>{item.valor}</td>
                                      <td>
                                         <div className="btn-group">
                                            <button className="btn btn-warning" 
                                                onClick={()=>{editproduto(item.id)}}>Editar</button>
                                            <button className="btn btn-warning" 
                                                onClick={()=>{deleteproduto(item.id)}}>Delete</button>
                                         </div>
                                      </td>
                                  </tr>
                              })}
                            </tbody>
                         </table>
                     </CardBody>
                  </Card>
              </Col>
          </Row>
      </div>
  )
}

export default Listproduto;
