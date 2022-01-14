import React from "react";
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({input}) {
        return <input {...input} />
    }
    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        )

    }
}

export default reduxForm({
// this gonna store everything in redux store under key of "stream create" inside the form
    form: "streamCreate"   
})(StreamCreate);