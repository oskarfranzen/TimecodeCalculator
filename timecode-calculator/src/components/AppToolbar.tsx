
import React from 'react'
import { AppBar, Box, Button, createMuiTheme, createStyles, Grid, Icon, makeStyles, Paper, Table, TableRow, Theme, ThemeProvider, Toolbar, TableCell, Typography } from '@material-ui/core';
import { Link, RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
    noBorder: {
        border: 'none'
    },
    headerText: {
        color: 'inherit',
        display: 'inline',
        fontSize: theme.typography.h6.fontSize,
        textTransform: 'none',
        fontWeight: 'bolder',
        '&:hover': {
            opacity: '0.4'
        }
    } 
}));

export const AppToolBar: React.FC<RouteComponentProps> = ({ location }) => {
    const classes = useStyles();

    return <AppBar position='static'>
        <Toolbar>
            <Table>
                <TableRow>
                    <TableCell className={classes.noBorder} width='25%' />
                    <TableCell className={classes.noBorder} width='50%' align='center'>
                        <Button className={classes.headerText} color='inherit' component={Link} to='/'>
                            <span>TimeCodeR</span>
                        </Button>
                    </TableCell>
                    <TableCell className={classes.noBorder} width='25%' align='right'>
                        <Button className={classes.headerText} component={Link} to='/about'>
                            <span >
                                About
                            </span>
                        </Button>
                    </TableCell>
                </TableRow>
            </Table>
        </Toolbar>
    </AppBar>

}