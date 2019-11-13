import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class Main extends Component {
    state = {
        newTitle: '',
        newAuthor: '',
        newPages: '',
        newBookRead: '',
        books: [],
    };
    handleReceberAutor = a => {
        this.setState({ newAuthor: a.target.value });
    };

    handleReceberTitulo = b => {
        this.setState({ newTitle: b.target.value });
    };

    handleReceberPaginas = c => {
        this.setState({ newPages: c.target.value });
    };

    handleReceberStatus = d => {
        this.setState({ newBookRead: d.target.value })
    }

    handleSubmitState = async z => {
        z.preventDefault();
        const {
            newTitle,
            newAuthor,
            newPages,
            newBookRead,
            books,
        } = this.state;
        const bookSchema = {
            title: newTitle,
            author: newAuthor,
            pages: newPages,
            read: newBookRead,

        };
        this.setState(
            {
                books: [...books, bookSchema],
                newTitle: '',
                newAuthor: '',
                newBookread: false,
                newPages: 0,
            });
        firebase.database().ref().push(bookSchema);
    }

    // initialize = async f => {
    //     f.preventDefault();
    //     const {
    //         newTitle,
    //         newAuthor,
    //         newPages,
    //         newBookRead,
    //         books,
    //     } = this.state;
    //     console.log(this.state);
    //     var ref = firebase.database().ref();
    //     let booksDB = this.state.books;
    //     ref.on("value", function (snapshot) {
    //         snapshot.forEach(function (childSnapshot) {
    //             var item = childSnapshot.val();

    //             var booksFromDatabase = {
    //                 title: item.title,
    //                 author: item.author,
    //                 pages: item.pages,
    //                 read: item.read,
    //             };
    //             booksDB.push(booksFromDatabase)
    //         });
    //     });
    //     console.log(booksDB);
    //     this.setState(
    //         {
    //             books: [booksDB],
    //         });
    //     console.log(this.state.books);
    // }

    // initialize = async f => {
    //     f.preventDefault();
    //     const {
    //         newTitle,
    //         newAuthor,
    //         newPages,
    //         newBookRead,
    //         books,
    //     } = this.state;
    //     var ref = firebase.database().ref();
    //     ref.on("value", function (snapshot) {
    //         snapshot.forEach(function(childSnapshot) {
    //             var item = childSnapshot.val();
    //             item.key = childSnapshot.key;
    //             console.log(item.title);
    //             console.log(item.author)
    //             console.log(item.pages);
    //             console.log(item.read);
    //             var booksFromDatabase = {
    //                 title: item.title,
    //                 author: item.author,
    //                 pages: item.pages,
    //                 read: item.read,
    //             };
    //             console.log(booksFromDatabase);
    //             this.setState(
    //                 {
    //                     books: [...books, booksFromDatabase],
    //                     newTitle: '',
    //                     newAuthor: '',
    //                     newBookread: false,
    //                     newPages: 0,
    //                 });
    //         });
    //     });
    // }

    render() {
        const { newTitle, newAuthor, newBookRead, newPages, books } = this.state;
        return (
            <div className="container">
                <h2>Biblioteca Virtual <i className="fas fa-book"></i></h2>
                <div className="card-deck">
                    <div className="card" id="cor1">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmitState}>
                                <div className="form-group">
                                    <label for="title">Title:</label>
                                    <input type="text" onChange={this.handleReceberTitulo} className="form-control" id="title" placeholder="Enter title" name="title" />
                                </div>
                                <div className="form-group">
                                    <label for="author">Author:</label>
                                    <input type="text" onChange={this.handleReceberAutor} className="form-control" id="author" placeholder="Enter author" name="email" />
                                </div>
                                <div className="form-group">
                                    <label for="pages">Pages:</label>
                                    <input type="text" onChange={this.handleReceberPaginas} className="form-control" id="pages" placeholder="Enter number of pages" name="pages" />
                                </div>
                                <div className="form-group">
                                    <label for="read1">Read:</label>
                                    <select className="form-control" id="status" onChange={this.handleReceberStatus}>
                                        <option value={true} >Read</option>
                                        <option value={false} >Not read</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn" id="botao">Cadastrar</button>
                                {/* <button type="button" onClick={this.initialize} className="btn" id="botao">Atualizar</button> */}
                            </form>
                        </div>
                    </div>


                    <div className="card" id="cor">
                        <div className="card-body">
                            <input id="myInput" type="text" placeholder="Search" />
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
                                {books.map(book => (
                                    <tbody>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.pages}</td>
                                        <td>{book.read}</td>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
