import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import Edit from '../Components/UserDetailsE';
import Info from '../Components/UserDetails';
import ProductManaging from '../Components/ProductManaging';
import UserrService from '../services/pmanager.service'
import productsService from '../services/products.service';
import {Utable} from './usertable.js'
import AuthService from '../services/auth.service';

class UserPage extends Component {
    /*componentDidMount() {
        AuthService.getCurrentUser().then(
             response => {
                 this.setState({
                     UserInfo: response.data
                 });
             },
             error => {
                 
             }
         )}
    constructor(props) {
        
        super(props);

        

        this.state = {
            searchString: "",
            UserInfo:"",


        };
    }
*/

    handleSearchBarChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }
    handleMenu1= (event) =>{
        var element=<Info></Info>;
        ReactDOM.render(element, document.getElementById('forms'));
        document.getElementById('sidebar').style.height="700px";
        var but=document.createElement("button");
        but.value=0;
        but.style="float:right";
        but.appendChild(document.createTextNode("Edit"));
        var but2=document.createElement("button");
        but2.style="float:right";
        but2.appendChild(document.createTextNode("Cancel"));
        but.onclick=function(){
            var element=<Edit></Edit>;
            ReactDOM.render(element, document.getElementById('forms'));
            document.getElementById('sidebar').style.height="700px";
            //document.getElementById('buttonholder').removeChild();
            document.getElementById('buttonholder').appendChild(but2);
        }

        but2.onclick=function(){
            var element=<Info></Info>;
            ReactDOM.render(element, document.getElementById('forms'));
            document.getElementById('sidebar').style.height="700px";
            //document.getElementById('buttonholder').removeChild();
            document.getElementById('buttonholder').appendChild(but);
        }        
        document.getElementById('buttonholder').appendChild(but);
    }
    handleMenu2= (event) =>{
        var element=<Utable ></Utable>;
        
        ReactDOM.render(element, document.getElementById('forms'));
        document.getElementById('sidebar').style.height="200px";
    }    



    render() {
        return (
            <div >
                <div class="navbar">
                    <div class="navbar-inner">
                        <div class="container">
                            <a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </a>
                            <div class="nav-collapse">
                                <ul class="nav">
                                    <li ><a href="/Home">Home	</a></li>
                                    <li class="active"><a href="index.html">Profile</a></li>
                                    <form onSubmit={this.searchCoffeeMachines} class="navbar-search pull-left">
                                        <input type="text" placeholder="Search" class="search-query span2" onChange={this.handleSearchBarChange}></input>
                                    </form>
                                    <ul class="nav pull-right"></ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="sidebar" class="span3" style={{ height: 700, width: 200 }}>
                        <div class="well well-small">
                            <div align="left" ><b>Menu</b></div><br></br>
                            <ul class="nav nav-list" id="insertCategories">
                                <li onClick={this.handleMenu1}>
                                <a >My Profile</a>
                                </li><br></br>
                                <li onClick={this.handleMenu2}>
                                <a >My Orders </a>
                                </li><br></br>
                                <li>
                                </li><br></br>
                            </ul>
                        </div>
                    </div>
                    <div class="well well-small">
                        <h3> Profile </h3>                        <div id="buttonholder"style={{float:"right"}}></div>
                        <hr class="soften" />
                        <div  id="forms">Welcome to your profile page.<br></br>In here you can see and update your information or view your purchases</div>

                    
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage