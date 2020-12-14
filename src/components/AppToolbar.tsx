
import React from 'react'
import { AppBar, Box, Button, createMuiTheme, createStyles, Grid, Icon, makeStyles, Paper, Table, TableRow, Theme, ThemeProvider, Toolbar, TableCell, Typography, TableCellProps } from '@material-ui/core';
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
            opacity: '0.8'
        }
    }
}));

export const AppToolBar: React.FC<RouteComponentProps> = ({ location }) => {
    const classes = useStyles();

    const InvisibleCell: React.FC<Partial<TableCellProps>> = (props) => <TableCell className={classes.noBorder} {...props} />

    return <AppBar position='static'>
        <Toolbar>
            <Table>
                <TableRow>
                    <InvisibleCell width='25%' />
                    <InvisibleCell width='50%' align='center'>
                        <Button className={classes.headerText} color='inherit' component={Link} to='/'>
                            <span>TimeCodeR</span>
                        </Button>
                    </InvisibleCell>
                    <InvisibleCell width='25%' align='right'>
                        <Button className={classes.headerText} component={Link} to='/about'>
                            <span >
                                About
                            </span>
                        </Button>
                    </ InvisibleCell>
                </TableRow>
            </Table>
        </Toolbar>
    </AppBar>

}