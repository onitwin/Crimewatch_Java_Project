import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function CrimeTable(props) {
  const classes = useStyles();
  const crimes = props.crimes

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Place </TableCell>
            <TableCell align="right">Frauds </TableCell>
            <TableCell align="right">House Break-ins</TableCell>
            <TableCell align="right">Motor Thefts</TableCell>
            <TableCell align="right">Non-sexual Crimes of Violence</TableCell>
              <TableCell align="right">Sexual Crimes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crimes.map((crime) => (
            <TableRow key={crime.id}>
              <TableCell component="th" scope="row">
                {crime.featureName}
              </TableCell>
              <TableCell align="right">{crime.numberOfFrauds}</TableCell>
              <TableCell align="right">{crime.numberOfHouseBreakIns}</TableCell>
              <TableCell align="right">{crime.numberOfMotorThefts}</TableCell>
              <TableCell align="right">{crime.numberOfNonSexualCrimesOfViolence}</TableCell>
                  <TableCell align="right">{crime.numberOfSexualCrimes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
// .map((crime) => {
//     return (
//       <tr>
//       <td> {crime.featureName} </td>
//       <td> {crime.numberOfFrauds} </td>
//       <td> {crime.numberOfHouseBreakIns} </td>
//        <td> {crime.numberOfMotorThefts} </td>
//        <td> {crime.numberOfNonSexualCrimesOfViolence} </td>
//        <td> {crime.numberOfSexualCrimes} </td>
//        </tr>
//     )
  // })


  // return (
  //   <table>
  //   <thead>
  //    <tr>
  //    <th> featureName </th>
  //       <th> NumberOfFrauds </th>
  //       <th> NumberOfHouseBreakIns </th>
  //       <th> NumberOfMotorThefts </th>
  //    <th> NumberOfNonSexualCrimesOfViolence </th>
  //    <th> NumberOfSexualCrimes </th>
  //
  //
  //    </tr>
  //    </thead>
  //    <tbody>
  //      {crimes}
  //    </tbody>
  //    </table>
  //
  // )
}
//
// export default CrimeTable;
