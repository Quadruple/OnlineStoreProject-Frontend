import React, { Component } from 'react'
import SetProductDiscount from '../Components/SetProductDiscount'
import ViewInvoices from '../Components/ViewInvoices'

class SalesManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSetDiscountMenu: true,
            showInvoicesMenu: false
        }

        this.renderCorrespondingMenu = this.renderCorrespondingMenu.bind(this);
    }

    renderCorrespondingMenu = (menuId) => {
        if(menuId == 0)
        {
            this.setState({
                showSetDiscountMenu: true,
                showInvoicesMenu: false
            });
        }
        else if(menuId == 1)
        {
            this.setState({
                showSetDiscountMenu: false,
                showInvoicesMenu: true
            });
        }
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
                                    <li class="active"><a   >Management</a></li>
                                    <ul class="nav pull-right"></ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="sidebar" class="span3" style={{ height: 310, width: 200 }}>
                        <div class="well well-small">
                            <div align="left" ><b>Manager Menu</b></div><br></br>
                            <ul class="nav nav-list" id="insertCategories">
                                <li>
                                    <a onClick={() => this.renderCorrespondingMenu(0)}>Set Product Discount</a>
                                </li><br></br>
                                <li>
                                    <a onClick={() => this.renderCorrespondingMenu(1)}>View All Purchases</a>
                                </li><br></br>
                                <li>
                                    <a>View Revenues in Between Dates</a>
                                </li><br></br>
                                <li>
                                    <a>Set Deliveries of Customers</a>
                                </li><br></br>
                            </ul>
                        </div>
                    </div>
                    <div class="well well-small">
                        <h3> Sales Management </h3>
                        <hr class="soften" />
                        <div>Welcome to your sales management page.<br></br>In here you can:<br></br> set discounts to products, view invoices, view revenues, set deliveries of customers.</div>
                        <div>
                           {
                               this.state.showSetDiscountMenu ? <SetProductDiscount /> : null
                           }
                           {
                               this.state.showInvoicesMenu ? <ViewInvoices /> : null
                           }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalesManager