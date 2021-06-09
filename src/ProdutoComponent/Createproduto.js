import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from 'reactstrap';

function CreateProduto (props){
    const [produto, setproduto] = useState({descricao:'',unidade:'', quantidade:'', valor:''});
    const [showLoading, setShowLoading] = useState(false); 
    const url = "https://localhost:44350/api/Produtos"; //+ props.match.params.id;

    const Insertproduto = (e) => {
        e.preventDefault();
       // debugger; 
        const data={descricao:produto.descricao, unidade:produto.unidade, quantidade:produto.quantidade, valvalor:produto.valor}
       debugger;
        axios.post(url, data).then((result)=> {props.history.push('/Listproduto')});
    };

    const onChange= (e) => {
        e.persist();
       // debugger; 
        setproduto ({...produto, [e.target.name]: e.target.value}); 
    }

    return(
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="10" xl="8">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form onSubmit={Insertproduto}>
                                    <h1>Adicionar Produtos</h1>
                                    <InputGroup className="mb-3">
                                          <Input type="text" name="descricao" id="descricao" placeholder="Descrição" value={produto.descricao} onChange={onChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                          <Input type="text" name="unidade" id="unidade" placeholder="Unidade" value={produto.unidade} onChange={onChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                          <Input type="text" name="quantidade" id="quantidade" placeholder="Quantidade" value={produto.quantidade} onChange={onChange}/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                          <Input type="text" name="valor" id="valor" placeholder="Valor" value={produto.valor} onChange={onChange}/>
                                    </InputGroup>                                  
                                    <CardFooter className="p-4">
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button type="submit" className="btn btn-info mb-1" block>Gravar</Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button className="btn btn-info mb-1" block>Voltar</Button>
                                            </Col>                                       
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>                                    
    )
}
export default CreateProduto
