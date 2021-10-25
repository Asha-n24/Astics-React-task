import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Item.css"
import { TableData } from "../TableData"
import { MdEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
import { Breadcrumb } from "antd"
import $ from "jquery"
class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemList: []
        }
    }
    componentDidMount = () => {
        if ((this.props.props.history.location.state == undefined)) {
            this.setState({ ItemList: TableData })

        } else if (this.props.props.history.location.state.data.length > 0) {
            // this.setState({ ItemList: this.props.props.history.location.state.data })
            if (JSON.parse(localStorage.getItem("TableData")) == null) {
                this.setState({ ItemList: this.props.props.history.location.state.data })
            } else {
                this.setState({ ItemList: JSON.parse(localStorage.getItem("TableData")) })
            }

        }
        this.forceUpdate();
    }
    deleteFun = (row) => {
        const removeIndex = this.state.ItemList.findIndex((item) => item.Name === row.Name);
        this.state.ItemList.splice(removeIndex, 1);
        localStorage.setItem('TableData', JSON.stringify(this.state.ItemList));
        window.location.reload()
    };

    editFun = async (row) => {
        let path = "/dashboard/update";
        this.props.props.history.push({
            pathname: path,
            editstate: { ...row },
        });
    };
    render() {
        return (
            <div>
                <div className="Main_Dashboard_Forms">
                    <div className="Breadblock">
                        <Breadcrumb className="breadfont">
                            <Breadcrumb.Item>Item / List</Breadcrumb.Item>

                        </Breadcrumb>
                    </div>
                </div>
                <Link to="/dashboard/add"><button class="addnewbtn btn btn-secondary">


                    Add New</button> </Link>
                <div className="itemdiv">
                    <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%" height="50vh">
                        <thead>
                            <tr>
                                <th>S No</th>
                                <th>Item Name</th>
                                <th>Price </th>
                                <th>Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ItemList.length > 0 && this.state.ItemList.map((data, index) => {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Price}</td>
                                    <td>{data.Quantity}</td>
                                    <td onClick={() => this.editFun(data)}><MdEdit color="#3671EE" /></td>
                                    <td onClick={() => this.deleteFun(data)}><AiFillDelete color="red" /></td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ItemList;
$(window).bind("pageshow", function (event) {
    if (event.originalEvent.persisted) {
        window.location.reload();
    }
});
