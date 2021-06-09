import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Createproduto from './ProdutoComponent/Createproduto';
import Editproduto from './ProdutoComponent/Editproduto';
import Listproduto from './ProdutoComponent/Listproduto';

function App () {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/Createproduto'} className="nav-link">
                    Adicionar Produto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Listproduto'} className="nav-link">
                    Listar Produto
                  </Link>
                </li>
              </ul>
            </div>
          </nav> <br />

          <Switch>
            <Route exact path="/Createproduto" component={Createproduto} />
            <Route path="/edit/:id" component={Editproduto} />
            <Route path="/Listproduto" component={Listproduto} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
