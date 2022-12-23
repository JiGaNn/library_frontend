import React,{Component} from "react";
import {variables} from '../Variables.js';

export class Readers extends Component{

    constructor(props) {
        super(props);

        this.state = {
            readers: [],
            modalTitle: "",
            reader_id: 0,
            surname: "",
            name: "",
            patronymic: "",
            password: "",
            email: "",
            address: "",
            phone: ""
        }
    }

    refreshList(){
        fetch(variables.API_URL+'readers')
        .then(response=>response.json())
        .then(data=>{
            this.setState({readers:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeSurname = (e) => {
        this.setState({surname:e.target.value});
    }

    changeName = (e) => {
        this.setState({name:e.target.value});
    }

    changePatronymic = (e) => {
        this.setState({patronymic:e.target.value});
    }

    changePassword = (e) => {
        this.setState({password:e.target.value});
    }

    changeEmail = (e) => {
        this.setState({email:e.target.value});
    }

    changeAddress = (e) => {
        this.setState({address:e.target.value});
    }

    changePhone = (e) => {
        this.setState({phone:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Reader",
            reader_id:0,
            surname:"",
            name:"",
            patronymic:"",
            password:"",
            email:"",
            address:"",
            phone:""
        })
    }

    editClick(rea){
        this.setState({
            modalTitle:"Edit Reader",
            reader_id: rea.reader_id,
            surname: rea.surname,
            name: rea.name,
            patronymic: rea.patronymic,
            password: rea.password,
            email: rea.email,
            address: rea.address,
            phone: rea.phone
        })
    }

    createClick(){
        fetch(variables.API_URL+'readers', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                surname:this.state.surname,
                name: this.state.name,
                patronymic: this.state.patronymic,
                password: this.state.password,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
            })
        })
        .then(res=>res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'readers', {
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                reader_id:this.state.reader_id,
                surname:this.state.surname,
                name: this.state.name,
                patronymic: this.state.patronymic,
                password: this.state.password,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
            })
        })
        .then(res=>res.json())
        .then((result) => {
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm("Are you sure?")){
            fetch(variables.API_URL+'readers/'+id, {
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then((result) => {
                alert(result);
                this.refreshList();
            },(error)=>{
                alert('Failed');
            })
        }
    }

    render(){
        const {
            readers,
            modalTitle,
            reader_id,
            surname,
            name,
            patronymic,
            password,
            email,
            address,
            phone
        }=this.state;

        return(
            <div>
                <button type="button"
                className="btn btn-primary m-2 float-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.addClick()}>
                    Add Reader
                </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                reader_id
                            </th>
                            <th>
                                surname
                            </th>
                            <th>
                                name
                            </th>
                            <th>
                                patronymic
                            </th>
                            <th>
                                password
                            </th>
                            <th>
                                email
                            </th>
                            <th>
                                address
                            </th>
                            <th>
                                phone
                            </th>
                            <th className="mx-4 float-end">
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {readers.map(rea=>
                            <tr key={rea.reader_id}>
                                <td>{rea.reader_id}</td>
                                <td>{rea.surname}</td>
                                <td>{rea.name}</td>
                                <td>{rea.patronymic}</td>
                                <td>{rea.password}</td>
                                <td>{rea.email}</td>
                                <td>{rea.address}</td>
                                <td>{rea.phone}</td>
                                <td>
                                    <button type="button"
                                    className="btn btn-light m-2 float-end"
                                    onClick={()=>this.deleteClick(rea.reader_id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>

                                    <button type="button"
                                    className="btn btn-primary m-2 float-end"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={()=>this.editClick(rea)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">surname</span>
                                    <input type="text" className="form-control"
                                    value={surname}
                                    onChange={this.changeSurname}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">name</span>
                                    <input type="text" className="form-control"
                                    value={name}
                                    onChange={this.changeName}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">patronymic</span>
                                    <input type="text" className="form-control"
                                    value={patronymic}
                                    onChange={this.changePatronymic}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">password</span>
                                    <input type="text" className="form-control"
                                    value={password}
                                    onChange={this.changePassword}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">email</span>
                                    <input type="text" className="form-control"
                                    value={email}
                                    onChange={this.changeEmail}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">address</span>
                                    <input type="text" className="form-control"
                                    value={address}
                                    onChange={this.changeAddress}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">phone</span>
                                    <input type="text" className="form-control"
                                    value={phone}
                                    onChange={this.changePhone}/>
                                </div>

                                {reader_id==0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.createClick()}>
                                    Create
                                </button>
                                :null}

                                {reader_id!=0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.updateClick()}>
                                    Update
                                </button>
                                :null}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}