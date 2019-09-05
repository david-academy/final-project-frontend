import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

export default function SunPositionOverlay(props) {
  console.log(props);

  const sunPaperStyle = {
    width: "15%",
    float: "left",
  /* position: "relative", */
    marginLeft: '5px',
    marginTop: '5%',
    bottom: "20px",
    right: "20px",
    minWidth: "200px"
  };

  return (
    <div>
      <Paper style={sunPaperStyle}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{moment(props.date).format("MMM Do")}</TableCell>
              <TableCell align="right">Time</TableCell>
              {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Dawn
              </TableCell>
              <TableCell align="right">
                {moment(props.suncalc.dawn).format("HH:mm")}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Sunrise
              </TableCell>
              <TableCell align="right">
                {moment(props.suncalc.sunrise).format("HH:mm")}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                GoldenHourEnd
              </TableCell>
              <TableCell align="right">
                {moment(props.suncalc.goldenHourEnd).format("HH:mm")}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Goldenhour
              </TableCell>
              <TableCell align="right">
                {moment(props.suncalc.goldenHour).format("HH:mm")}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Sunset
              </TableCell>
              <TableCell align="right">
                {moment(props.suncalc.sunset).format("HH:mm")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
