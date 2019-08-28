import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import PlanData from './singleplan/PlanData'
import {AuthContext } from "../context/Authcontext";
import { plans } from "./EditPreviousPlan";
import PlanModal from './PlanModal';
import Box from '@material-ui/core/Box';


class Plan extends Component {

    state = {
        plans: []
    };

    AuthContext = this.context;

    componentDidMount(props) {
        this.context.getData("plans/" ).then(res => {
            console.log(res)
            this.setState({plans: res})})
        console.log("componentDidMount: ", this.state.plans)
    };


    render() {
        console.log("Renderissa: ", this.state.plans);

        return (

                <div>
                    <Box style={gridWrapper}>
                    <div style={{ marginTop: 30, padding: 40 }}>
                        <Grid container spacing={1} justify="center">
                            <PlanModal/>
                        </Grid>
                    </div>

                    <div style={{ marginTop: 20, padding: 30 }}>
                        <Grid container spacing={2} justify="center">
                            <h2 style={{ marginTop: 20, padding: 30 }}>Here you can check and modify your previous plans:</h2>
                            <Grid
                                container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                                container spacing={3}
                            >
                            {plans && <PlanData plans ={this.state.plans}/> }
                            </Grid>
                        </Grid>
                    </div>
                    </Box>
                </div>

        );
    }
}

export default Plan;

Plan.contextType = AuthContext;



/*Border styles for grid that displays prev. plans*/
const gridWrapper = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
};

