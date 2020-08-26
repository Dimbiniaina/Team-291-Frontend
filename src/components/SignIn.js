import React from "react";
import {MDBRow, MDBCol, MDBInput, MDBCardFooter} from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBBox, MDBCardTitle, MDBIcon } from "mdbreact";
import "mdbreact/dist/css/mdb.css"


const signInForm = () =>{

    return (
        <div >

            <MDBBox display="flex" justifyContent="center" >
                <MDBCol className="my-5" md="5">
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle><p className="h4 text-primary text-center py-4">Sign In</p></MDBCardTitle>
                            <form className="p-4 mt-4">
                                <div className="grey-text mx-2">
                                    <MDBInput
                                        label="username or email"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />


                                    <MDBInput
                                        label="enter your password"
                                        icon="key"
                                        group
                                        type="password"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />


                                </div>
                                <div className="text-center py-4 my-4">
                                    <MDBRow className="d-flex flex-row justify-content-center align-content-center">
                                        <MDBCol md="6" >

                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="defaultChecked2" checked/>
                                                    <label className="custom-control-label text-info" htmlFor="defaultChecked2">
                                                        Remember Me </label>
                                            </div>

                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBBtn color="info">
                                                sign in
                                                <MDBIcon far icon="paper-plane" className="ml-1" />
                                            </MDBBtn>
                                        </MDBCol>
                                    </MDBRow>


                                </div>

                                <div className="row my-3 d-flex justify-content-center">
                                    <MDBBtn
                                        type="button"
                                        color="blue"
                                        rounded
                                        className="mr-md-3 w-25 z-depth-1a"
                                    >
                                        <MDBIcon fab icon="facebook-f" className="white-text text-center" />
                                    </MDBBtn>
                                    <MDBBtn
                                        type="button"
                                        color="light-blue"
                                        rounded
                                        className="mr-md-3 w-25 z-depth-1a"
                                    >
                                        <MDBIcon fab icon="twitter" className="white-text" />
                                    </MDBBtn>
                                    <MDBBtn
                                        type="button"
                                        color="red"
                                        rounded
                                        className="z-depth-1a w-25"
                                    >
                                        <MDBIcon fab icon="google-plus-g" className="white-text" />
                                    </MDBBtn>
                                </div>
                            </form>


                        </MDBCardBody>
                        <MDBCardFooter className="justify-content-center font-italic text-center text-info">
                            <div>
                                <a>I don't have an account</a>
                            </div>
                        </MDBCardFooter>
                    </MDBCard>

                </MDBCol>


            </MDBBox>


        </div>
    )
}

export default signInForm;
