import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import "./gestionar.css"
import { userConstants } from '../constants/user';
import {Navigation} from './navigation';
    
export class viewReport extends Component {
    constructor(){
        super();
        this.state={
            data:[],
        }
    }

    componentDidMount(){
        console.log(this.props.location.state.usuario);
        fetch(`/GetMyData/?user=${this.props.location.state.usuario.id_user}`)
        .then((Response)=>Response.json())
        .then((findresponse)=>{
            this.setState({
                data:findresponse,
            });
        });
    }
    render() {
        return (
            <div className="overlay">
                {/* <Navigation className ="Nav_bar"></Navigation> */}
                <h3 className="title">Mis reportes</h3>
                {
                    this.state.data.map((dynamicData)=>
                        <MDBCol className ="cards">
                        <MDBCard style={{ width: "25rem",padding: "2 em"}} >
                            {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" */}
                                {/* waves /> */}
                            <MDBCardBody className="cardsI">
                            <MDBCardTitle>Reporte #{dynamicData.id_report}</MDBCardTitle>
                            <MDBCardText>
                                <h4>Locación: </h4>{dynamicData.location} <br></br>
                                <h4>Tamaño: </h4>{dynamicData.tamanio} <br></br>
                                {dynamicData.ancho_aprox} <br></br>  
                                {dynamicData.largo_aprox}   <br></br>
                                {dynamicData.profundidad_aprox} <br></br>
                                <h4>Referencias: </h4>{dynamicData.refe1} <br></br>
                                <h4>Fecha del reporte</h4>>{dynamicData.fecha_reporte} <br></br> 
                                <h4>Reportado por: </h4>{dynamicData.nombre} <br></br>   
                                {dynamicData.usuario}
                                <h4>Estado: </h4>{dynamicData.estado_bache} <br></br>    
                                {/* Some quick example text to build on the card title and make */}
                                {/* up the bulk of the card&apos;s content. */}
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>

                  
                    )
                }
            </div>
        );
    }
}

export default viewReport;
