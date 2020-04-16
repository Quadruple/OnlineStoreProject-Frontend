import React, { Component } from 'react'
import '../style.css'
import '../assets/font-awesome/css/font-awesome.css'
import '../assets/css/bootstrap.css'
import Dimage from '../assets/img/d.jpg'
import Eimage from '../assets/img/e.jpg'
import Fimage from '../assets/img/f.jpg'

class Home_Page extends Component {
    constructor() {
        super()

    }







    render() {

        return(
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
                                <li class="active"><a href="index.html">Home	</a></li>
                                <form action="#" class="navbar-search pull-left">
                                    <input type="text" placeholder="Search" class="search-query span2"></input>
                                </form>
                                <ul class="nav pull-right"></ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div id="sidebar" class="span3" style={{height:600, width:150 }}>
                    <div class="well well-small">
                    <div align="left" ><b>Catagories:</b></div>                      
                        <ul class="nav nav-list">

                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 2</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 3</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 4</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 5</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 6</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 7</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 8</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 9</a></li>
                            <li><a align="left" href="products.html"><span class="icon-chevron-right"></span>Catagory 10</a></li>
                        </ul>
                    </div>
                </div>
               


            <div class="well well-small">
                <h3><a class="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span class="icon-plus"></span></a> Featured Products  </h3>
                <hr class="soften" />
                <div class="row-fluid">
                    <ul class="thumbnails">
                        <li class="span4">
                            <div class="thumbnail">
                                <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                                <a href="product_details.html"><img src={Dimage} alt=""></img></a>
                                <div class="caption">
                                    <h5>Manicure & Pedicure</h5>
                                    <h4>
                                        <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                        <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                        <span class="pull-right">$22.00</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li class="span4">
                            <div class="thumbnail">
                                <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                                <a href="product_details.html"><img src={Eimage} alt=""></img></a>
                                <div class="caption">
                                    <h5>Manicure & Pedicure</h5>
                                    <h4>
                                        <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                        <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                        <span class="pull-right">$22.00</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li class="span4">
                            <div class="thumbnail">
                                <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                                <a href="product_details.html"><img src={Fimage} alt="" /></a>
                                <div class="caption">
                                    <h5>Manicure & Pedicure</h5>
                                    <h4>
                                        <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                        <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                        <span class="pull-right">$22.00</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        )




    }






}

export default Home_Page