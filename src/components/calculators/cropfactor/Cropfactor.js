import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "ghostwhite",
    color: "black",
    borderRadius: "borderRadius",
    /* marginTop: "50px", */
    margin: "5%",
    flexGrow: 1,
    /* padding: "5%", */
    paddingBottom: "50px"
  },
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
      overflowX: "auto",
      margin: '10%',
    padding: '1%'
  },
  table: {
    minWidth: 650
  }
}));

export default function Cropfactor() {
  const classes = useStyles();

  return (
    <div >
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Frame
              </TableCell>
              <TableCell align="right">FRAME</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Objective
              </TableCell>
              <TableCell align="right">Objective</TableCell>
            </TableRow>
          </TableBody>
              </Table>
              Result
      </Paper>
    </div>
  );
}
