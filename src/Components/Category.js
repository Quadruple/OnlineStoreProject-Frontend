import React, { Component } from 'react'
import CategoryServices from '../services/categories.service'

class Category extends Component {
    componentDidMount()
    {
        this.setState({
            categories: ["Simbo", "Philips", "Capsules", "Renderers"]
        });
        /*
        CategoryServices.fetchAllCategories().then(
            response => {
                this.setState({
                    categories: response.data
                });
            },
            error => {
                this.setState({
                    categories:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
        */
    }

    constructor(props) {
        super(props);

        this.printCategory = this.printCategory.bind(this);

        this.state = {
            categories: []
        };
    }

    printCategory = item => 
    {
        console.log("A category clicked:",  item);
    }

    render() {
        return (
            <div>
                {this.state.categories.map((item, index) => (
                    <li><a align="left" onClick={() => this.printCategory(item)} ><span class="icon-chevron-right"></span>{item}</a></li>
                ))}
            </div>
        )
    }
}

export default Category