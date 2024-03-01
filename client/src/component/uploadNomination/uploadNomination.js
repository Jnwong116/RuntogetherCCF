import { Box, Typography } from "@mui/material";
import React from "react";
import GenericButton from "../genericButton/genericButton";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class UploadNomination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        nominationText: this.props.previousNomination,
        nominationMatches: false,
        sanitizedNomination: this.trimText(this.props.previousNomination),
        };
    }

    trimText = (text) => {
        if (text === undefined) {
        return "";
        }
        const regex = /(<p><br><\/p>)*$/;
        return text.replace(regex, '');
    };  

    handleNominationTextChange = (event) => {
        this.setState({
        nominationText: event,
        nominationMatches: true,
        sanitizedNomination: this.trimText(event),
        });
    };

    render() {
        if (
        this.state.nominationText !== this.props.previousNomination &&
        !this.state.nominationMatches
        ) {
        this.setState({
            nominationText: this.props.previousNomination,
            nominationMatches: true,
        });
        }
        return (
        <>
            <Typography color="textPrimary" paddingBottom="1em">
            {this.props.nominee.name} is running for{" "}
            {this.props.nominee.positions[0]} and has requested your nomination.
            Type or paste your nomination in the box below and click "Submit" to
            upload your nomination.
            </Typography>
            <ReactQuill 
                theme="snow" 
                value={this.state.nominationText} 
                onChange={this.handleNominationTextChange} 
                placeholder={"Enter Nomination Here"}
                style={{ 
                    marginBottom: "1em",
                    backgroundColor: "#e4e4e4",
                    border: "1px solid #000",
                    width: "100%",
                    maxHeight: "400px",
                    overflowY: "auto",
                }}
            />
            <Box width="150px" marginLeft="auto" marginRight="0" marginTop="0.8em">
            <GenericButton 
                color="action"
                onClick={() => {
                    console.log(this.state.sanitizedNomination);
                this.props.handleSubmit(this.state.sanitizedNomination);
                }}
            >
            Submit
            </GenericButton>
            </Box>
        </>
        );
    }
}

export default UploadNomination;
