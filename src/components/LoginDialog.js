import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        if (this.state.email && this.state.password) {
            this.props.setUserEmailPassword(this.state.email, this.state.password);
            this.props.handleLoginDialogCloseClick();
        }
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <Dialog
                open={this.props.open || false}
                onClose={this.props.handleLoginDialogCloseClick}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">PostGUI Login{this.props.dbName ? " - " + this.props.dbName : ''}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Provide your credentials for this database, it may allow you more privileges.</DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        onChange={this.onChangeHandler}
                        fullWidth />
                    <TextField
                        required
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        onChange={this.onChangeHandler}
                        fullWidth />
                </DialogContent>
                <Divider />
                <DialogActions>
                    <Button onClick={this.props.handleLoginDialogCloseClick} color="default">Cancel</Button>
                    <Button onClick={this.handleLoginClick} color="secondary">Login</Button>
                </DialogActions>
            </Dialog >
        );
    }
}