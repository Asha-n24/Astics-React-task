import React, { Component } from 'react';
import { TextInput } from "../Common/forms/inputField"
import { Link } from "react-router-dom"
import { Button, Row, Col } from "reactstrap"
import { BiTestTube } from "react-icons/bi"
import { FaRupeeSign, FaShoppingCart, FaListAlt } from "react-icons/fa"
import { Form } from "informed"
import { TableData } from "../TableData"
import { Breadcrumb } from "antd"
import { validateProperty } from "../Common/forms/joiValidation";
class AddItem extends Component {
    constructor(props) {
        super(props);


    }
    componentDidMount = () => {
        if (this.props.formType === "edit" && this.props.editstate) {
            localStorage.setItem("EditData", this.props.editstate);
            this.formStateCheck(this.props.editstate)
        }
    }
    formStateCheck = async (data) => {
        this.formApi.setValues(data)
    }
    setFormApi = (formApi) => {
        this.formApi = formApi
    }

    onSubmit = () => {
        let data = this.formApi.getValues();

        if (this.props.formType === "edit") {
            // localStorage.setItem("TableData", `${JSON.stringify(TableData)}`, + JSON.stringify(data));
            TableData.map((value, index) => {
                if (value.Name == data.Name) {
                    value.Name = data.Name
                    value.Price = data.Price
                    value.Quantity = data.Quantity
                }

            })
            localStorage.setItem("TableData", `${JSON.stringify(TableData)}`, + JSON.stringify(data));
            // TableData.push(data);
            this.props.history.push({
                pathname: "/dashboard/list",
                state: {
                    data: TableData
                },

            })
        } else {
            TableData.push(data);
            localStorage.setItem("TableData", `${JSON.stringify(TableData)}`, + JSON.stringify(data));
            this.props.history.push({
                pathname: "/dashboard/list",
                state: {
                    data: TableData
                },

            })
        }

    }

    render() {
        return (
            <div>
                <div className="Main_Dashboard_Forms">
                    <div className="Breadblock">
                        <Breadcrumb className="breadfont">
                            {this.props.formType === "edit" ?
                                <Breadcrumb.Item>Item / Update</Breadcrumb.Item>
                                : <Breadcrumb.Item>Item / Add</Breadcrumb.Item>
                            }

                        </Breadcrumb>
                    </div>
                </div>
                <div className="additemdiv">

                    <Form getApi={this.setFormApi} onSubmit={() => this.onSubmit()}>
                        {({ formApi, formState }) => (
                            <div className="formportion" style={{ paddingTop: "0" }}>
                                <section className="formgroup_legend">
                                    <Row>
                                        <Col md={3}>
                                            {this.props.formType === "edit" ? <TextInput
                                                className="gog2"
                                                placeholder="Item Name"
                                                required={true}
                                                icon={<FaShoppingCart style={{ color: "#3671EE" }} />}
                                                className="form-control-md"
                                                field="Name"
                                                readOnly
                                            /> : <TextInput
                                                className="gog2"
                                                placeholder="Item Name"
                                                required={true}
                                                icon={<FaShoppingCart style={{ color: "#3671EE" }} />}
                                                className="form-control-md"
                                                field="Name"
                                                validateOnBlur
                                                validate={(e) =>
                                                    validateProperty(true, "name", e, "Item Name")
                                                }
                                            />}
                                        </Col>
                                        <Col md={3}>
                                            <TextInput
                                                className="gog2"
                                                placeholder="Price"
                                                required={true}
                                                icon={<FaRupeeSign style={{ color: "#3671EE" }} />}
                                                className="form-control-md"
                                                field="Price"
                                                validateOnBlur
                                                validate={(e) =>
                                                    validateProperty(true, "number", e, "Price")
                                                }
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <TextInput
                                                className="gog2"
                                                placeholder="Quantity"
                                                required={true}
                                                icon={<FaListAlt style={{ color: "#3671EE" }} />}
                                                className="form-control-md"
                                                field="Quantity"
                                                validateOnBlur
                                                validate={(e) =>
                                                    validateProperty(true, "name", e, "Quantity")
                                                }
                                            />
                                        </Col>

                                    </Row>
                                </section>
                                <div>
                                    <Link to="/dashboard/list">
                                        <Button type="button" className="cancelbtn btn btn-danger mt-4 ml-2">
                                            Cancel
                                        </Button>
                                    </Link>

                                    <Button type="submit" className=" submitbtn btn btn-primary mt-4">
                                        {this.props.formType === "add" ? "Submit" : "Update"}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>

        );
    }
}



export default AddItem;