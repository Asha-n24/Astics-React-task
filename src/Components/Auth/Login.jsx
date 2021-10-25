import React, { Component } from "react";
import "./Login.css";
import { TextInput } from "../Common/forms/inputField";
import { validateProperty } from "../Common/forms/joiValidation";
import { FaStethoscope, FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {
    Button, Row, Col
} from "reactstrap";
import { BsArrowLeft } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Form } from "informed";
import { loginData } from "../LoginData"
import { storeCookieData } from "../CookiesFunc";
import login from "../Images/login.png"
import { AddNotification } from "../Common/forms/notification"




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signin: true,
            signup: false,
            loginData: loginData,
            openNotification: false,

        };
    }
    goSignup = () => {
        this.setState({ signup: true, signin: false })
    }
    goSignin = () => {
        this.setState({ signup: false, signin: true })
    }
    setFormApi = (formApi) => {
        this.formApi = formApi;
    };
    Signup = () => {
        let data = this.formApi.getValues();
        let signupdata = [...this.state.loginData]
        signupdata.push({
            "userName": data.userName,
            "mobileNo": data.mobileNo,
            "password": data.password,
            "userRole": "U"
        })
        this.setState({ loginData: signupdata, signup: false, signin: true })


    }
    onSubmitLogin = () => {
        let data = this.formApi.getValues();
        this.state.loginData.map((value, index) => {
            if ((value.mobileNo == data.mobileNo) && (value.password == data.password)) {
                storeCookieData("userRole", value.userRole);
                localStorage.setItem("userName", value.userName);
                this.props.history.push({
                    pathname: "/dashboard/list",
                    state: undefined,
                });
            }else{
                this.setState({
                    loading: false,
                    isModalOpen: false,
                    openNotification: true,
                    message: "Enter Proper Mobile No and Password",
                    variant: "warning",
                  });
            }
        })

    }
    render() {
        const { logindata } = this.state;
        return (
            <div>
                <AddNotification
                    visible={this.state.openNotification}
                    variant={this.state.variant}
                    message={this.state.message}
                    onClose={() => this.setState({ openNotification: false })}
                />
                <div className="LoginBase">
                    <Fade>
                        <div className="LoginTop">
                            <Row>
                                <Col md={6}>
                                    <div className="imgbgblock">


                                        <div className="lottiecont">
                                            <Fade delay={500}>
                                                <div>
                                                    <img
                                                        src={login}
                                                        className="loginimage"
                                                    />
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div>
                                        <div className="loginblock">
                                            {this.state.signin === true && this.state.signup === false && <div className="loginblockform">
                                                <Slide left>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            flexDirection: "row",
                                                        }}
                                                    >
                                                        <div className="d-flex justify-content-center">
                                                            <div className="forgottxt " onClick={this.goSignup}>
                                                                SignUp
                                                            </div>
                                                            &nbsp;<div className="mt-1 mr-2">or</div>&nbsp;
                                                            <div
                                                                className="forgottxt currentdiv"
                                                                onClick={this.goSignin}>
                                                                SignIn
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="headertitle">Hey there! Welcome.</div>
                                                    <Form getApi={this.setFormApi} onSubmit={this.onSubmit}>
                                                        {({ formApi, formState }) => (
                                                            <>
                                                                <div className="FormFields">
                                                                    <div>
                                                                        <TextInput
                                                                            className="gog"
                                                                            placeholder="Mobile No"
                                                                            icon={<FaUserCircle color="#3671EE" size="18px" />}
                                                                            required={true}
                                                                            className="form-control-lg"
                                                                            field="mobileNo"
                                                                            validateOnBlur
                                                                            validate={(e) =>
                                                                                validateProperty(true, "contact", e, "MobileNo")
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="mt-4" style={{ marginTop: "20px" }}>
                                                                        <TextInput

                                                                            type="password"
                                                                            className="gog"
                                                                            placeholder="Password"
                                                                            icon={<RiLockPasswordFill color="#3671EE" size="18px" />}
                                                                            required={true}
                                                                            className="form-control-lg"
                                                                            field="password"
                                                                            validateOnBlur
                                                                            validate={(e) =>
                                                                                validateProperty(true, "password", e, "Password")
                                                                            }
                                                                        />
                                                                    </div>


                                                                    <div>
                                                                        <Button
                                                                            type="submit"
                                                                            className="loginbtn mt-4"
                                                                            onClick={this.onSubmitLogin}
                                                                        >
                                                                            Login
                                                                        </Button>
                                                                    </div>


                                                                </div>
                                                            </>
                                                        )}
                                                    </Form>
                                                </Slide>
                                            </div>}
                                            {this.state.signup === true && this.state.signin === false && <div className="loginblockform">
                                                <Slide left>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            flexDirection: "row",
                                                        }}
                                                    >


                                                        <div className="d-flex justify-content-center">
                                                            <div className="forgottxt currentdiv" onClick={this.goSign}>
                                                                SignUp
                                                            </div>
                                                            &nbsp;<div className="mt-1 mr-2">or</div>&nbsp;
                                                            <div
                                                                className="forgottxt"
                                                                onClick={this.goSignin

                                                                }
                                                            >
                                                                SignIn
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Form getApi={this.setFormApi} onSubmit={this.onSubmit}>
                                                        {({ formApi, formState }) => (
                                                            <>
                                                                <div className="FormFields">
                                                                    <div>
                                                                        <TextInput
                                                                            className="gog"
                                                                            placeholder="userName"
                                                                            icon={<FaUserCircle color="#219F86" size="18px" />}
                                                                            required={true}
                                                                            className="form-control-lg"
                                                                            field="userName"
                                                                            validateOnBlur
                                                                            validate={(e) =>
                                                                                validateProperty(true, "name", e, "User Name")
                                                                            }

                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <TextInput
                                                                            className="gog"

                                                                            placeholder="mobileNo"
                                                                            icon={<FaUserCircle color="#219F86" size="18px" />}
                                                                            required={true}
                                                                            className="form-control-lg"
                                                                            field="mobileNo"
                                                                            validateOnBlur
                                                                            validate={(e) =>
                                                                                validateProperty(true, "contact", e, "Mobile No")
                                                                            }

                                                                        />
                                                                    </div>
                                                                    <div className="mt-4" style={{ marginTop: "20px" }}>
                                                                        <TextInput
                                                                            type="password"
                                                                            className="gog"

                                                                            placeholder="Password"
                                                                            icon={<RiLockPasswordFill color="#219F86" size="18px" />}
                                                                            required={true}
                                                                            className="form-control-lg"
                                                                            field="password"
                                                                            validateOnBlur
                                                                            validate={(e) =>
                                                                                validateProperty(true, "password", e, "Password")
                                                                            }

                                                                        />
                                                                    </div>


                                                                    <div>
                                                                        <Button
                                                                            type="submit"
                                                                            className="loginbtn mt-4"
                                                                            onClick={this.Signup}
                                                                        >
                                                                            SignUp
                                                                        </Button>
                                                                    </div>


                                                                </div>
                                                            </>
                                                        )}
                                                    </Form>
                                                </Slide>
                                            </div>}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                </div>

            </div>
        );
    }
}

export default Login;
