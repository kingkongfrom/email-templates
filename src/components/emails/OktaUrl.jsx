import { Fragment } from "react";

const OktaUrl = ({ setSubject }) => {
    const URL = "https://experian-nab.okta.com"
    setSubject("Experian Okta profile URL")
    return (
        <Fragment>
            <p>Please use the following URL to access your Experian OKTA profile.</p>
            <a href={URL} className="url">{URL}</a>
            <br/>
        </Fragment>
    );
};
export default OktaUrl;
