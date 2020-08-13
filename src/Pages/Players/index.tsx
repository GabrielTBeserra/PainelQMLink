import React from 'react';

import { Container, Tables, ButonsAction, Cell , Cell2 } from './styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const playerss = [
    { name: "Urso", uuid: "c50122cc-dbe6-11ea-87d0-0242ac130003", fac: "", rank: "" },
    { name: "Luix", uuid: "c50122cc-dbe6-11ea-87d0-0242ac130003", fac: "", rank: "" },
    { name: "Faker", uuid: "c50122cc-dbe6-11ea-87d0-0242ac130003", fac: "", rank: "" },
    { name: "Raposo", uuid: "c50122cc-dbe6-11ea-87d0-0242ac130003", fac: "", rank: "" },
    { name: "Douglas", uuid: "c50122cc-dbe6-11ea-87d0-0242ac130003", fac: "", rank: "" },
    { name: "Foisco", uuid: "c50122cc-dbe6-11ea-87d0-0242ac130003", fac: "", rank: "" },
]

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#363636",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


function kickPlayer(uuid: any) {
    alert(uuid);
}

function sendMensageToPlayer(uuid: any) {
    prompt("Qual a mensagem ?");
}

function banPlayer(uuid: any) {
    alert(uuid);
}

function warnPlayer(uuid: any) {
    alert(uuid);
}

const Players: React.FC = () => {
    return (
        <Container >
            <Tables>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nick</StyledTableCell>
                                <StyledTableCell>Facction</StyledTableCell>
                                <StyledTableCell>Rank (Rankup)</StyledTableCell>
                                <StyledTableCell className="MenuItem">UUID</StyledTableCell>
                                <StyledTableCell>ACTIONS</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {playerss.map((p) => (
                                <StyledTableRow key={p.name}>
                                    <StyledTableCell component="th" scope="row"> {p.name}</StyledTableCell>
                                    <StyledTableCell>{p.fac === "" || p.fac === null ? '-' : p.fac}</StyledTableCell>
                                    <StyledTableCell>{p.rank === "" || p.rank === null ? '-' : p.rank}</StyledTableCell>
                                    <StyledTableCell>{p.uuid}</StyledTableCell>
                                    <StyledTableCell>
                                        <Cell>
                                            <ButonsAction color="#0099ff" hoverColor="#0088e3">
                                                <button onClick={(e) => kickPlayer(p.uuid)}>Kick</button>
                                            </ButonsAction>
                                            <ButonsAction color="#00e381" hoverColor="#00b567">
                                                <button onClick={(e) => warnPlayer(p.uuid)}>Warn</button>
                                            </ButonsAction>
                                            <ButonsAction color="#f200b1" hoverColor="#c2028e">
                                                <button onClick={(e) => banPlayer(p.uuid)}>Ban</button>
                                            </ButonsAction>
                                            <ButonsAction color="#e9ed00" hoverColor="#dfe300">
                                                <button onClick={(e) => sendMensageToPlayer(p.uuid)}>SendMsg</button>
                                            </ButonsAction>
                                        </Cell>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Tables>
        </Container >
    );
}

export default Players;