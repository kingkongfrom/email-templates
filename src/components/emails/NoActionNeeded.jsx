import { Fragment } from "react";

const NoActionNeeded = ({ setSubject }) => {
    setSubject("No user found");
    return (
        <Fragment>
            <p>We ran a search in our system to find a user ID associated to information provided, unfortunately,
                we were unable to find a match.
            </p>
            <br/>
            <p>Can you please provide us more details such as company name, Subscriber Code, or user ID of a
                coworker with access to Experian, with that information we would be able to find your user ID.
            </p>
        </Fragment>
    );
};
export default NoActionNeeded;
