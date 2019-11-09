import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

      <body> 

      <div className="container">
        <h2>Biblioteca Virtual <i className="fas fa-book"></i></h2> 
        <div className="card-deck">
          <div className="card" id="cor1">
            <div className="card-body">
    
    
             <form>
              <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" name="title"/>
              </div>
              <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" id="author" placeholder="Enter author" name="email"/>
              </div>
              <div className="form-group">
                <label for="pages">Pages:</label>
                <input type="text" className="form-control" id="pages" placeholder="Enter number of pages" name="pages"/>
              </div>
              <div className="form-group">
                <label for="read1">Read:</label>
                <select className="form-control" id="status">
                  <option>Read</option>
                  <option>Not read</option>
                </select>
              </div>
              <button onclick="submeter()" type="button" className="btn" id="botao">Cadastrar</button>
            </form>
    
    
          </div>
        </div>
        <div className="card" id="cor">
          <div className="card-body">
            <input id="myInput" type="text" placeholder="Search"/>
            <table className="table table-striped" id="tabela">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="tbody">
    
                </tbody>
            </table>
          </div>
        </div>
    
      </div>
    </div>
    
    </body>
    );
  }
}

export default App;
