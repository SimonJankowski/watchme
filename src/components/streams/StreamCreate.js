import React from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { createStream } from '../../actions';


class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
            //DATA FLOW FOR FORM SUBMIT: 1. validate inputs 
            //2.If they are valid onSubmit is called than calls action creator createStreams with passed formValues (in action/index.js)
            //3.That creator makes POST request to back-end  to create new stream
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }
    if (!formValues.description) {
        errors.description = "You must enter a description"
    }
    return errors;
}


const formWrapped = reduxForm({
    // this gonna store everything in redux store under key of "stream create" inside the form
    form: "streamCreate",
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped)