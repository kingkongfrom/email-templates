import { Fragment } from "react";

const OriginUrl = ({ setSubject }) => {
    setSubject("Experian Origin URL")
    const URL = "https://origin-na.experian.com"
    return (
        <Fragment>
            <p>Please use the following URL in order to access your administration portal</p>
            <a href={URL} className="url">{URL}</a>
            <br/>
        </Fragment>
    );
};
export default OriginUrl;
