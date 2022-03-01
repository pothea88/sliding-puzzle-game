import React, {useState, useEffect}  from "react";
import {useHistory} from 'react-router-dom';
import {Card, CardContent, CardActions, Button, Typography, CardHeader} from '@mui/material';
import { Container, Row, TextField, CardMedia} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Info from "@mui/icons-material/Info";


export default function Register(){
    // const history = useHistory();
    const classes = useStyle();
    return(
        <div className={classes.card}>
            <Grid container spacing={0}>
                <Grid xs={1} item></Grid>
                <Grid xs={10} item container direction={"column"} >
                    <Card className={classes.background}>
                        {/* <CardHeader>
                            <div> */}
                                <Grid container >
                                    <Grid item xs={6} flexDirection={"row"}>
                                        <CardMedia component="img" alt="logo" src="https://w7.pngwing.com/pngs/874/435/png-transparent-singapore-prudential-financial-prudential-assurance-company-insurance-finance-nysepru-text-logo-smile.png" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div style={{marginRight:'20px',float:'right', marginTop:'30px'}}>
                                            <strong><span>EN</span></strong> | <strong><span>KH</span></strong>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{mt: '20px', ml: '20px'}} flexDirection={"column"}>
                                    <Grid xs={12} item>
                                        <strong><span>Welcome</span></strong> <br></br>
                                        <strong><span>Please register to continue</span></strong>
                                    </Grid>
                                </Grid>
                            {/* </div> */}
                        {/* </CardHeader> */}
                        <CardContent>
                            <Grid item>
                                <TextField name="name" fullWidth size="small" placeholder="Enter your name" />
                            </Grid>
                            <Grid item style={{marginTop:'10px'}}>
                                <TextField name="name" fullWidth size="small" placeholder="(+855) Phone number" />
                            </Grid>
                            
                            <Grid container spacing={3} sx={{mt:'5px'}} flexDirection={"row"}>
                                <Grid item xs={1}>
                                    <InfoIcon size="small"/>
                                </Grid>
                                <Grid item xs={11}>
                                    <span>When you win a gift, our agent will contact you. Please ensure you information is valid.</span>
                                </Grid>
                            </Grid>
                            <hr></hr>
                            <Grid item style={{marginTop:'10px'}}>
                                <Button variant="contained" fullWidth>Register</Button>
                            </Grid>
                        </CardContent>
                        
                    </Card>
                </Grid>
                <Grid xs={1} item></Grid>
            </Grid>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    root : {
        
    },
    card: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    background: {
        backgroundColor: 'white',
    },
    textHeaderStyle : {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    spacing : {
        marginTop: '10px'
    }
}));
