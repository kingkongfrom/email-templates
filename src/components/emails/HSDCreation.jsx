import { Fragment } from "react";

const HsdCreation = ({ setSubject }) => {
    setSubject("Head Security Designate form")
    const eSupport = "esupport@experian.com";

    return (
        <Fragment>
            <p>Please fill out the Head Security Designate Authorization Form attached.</p>
            <p>Make sure you select the create option, you can add up to three user IDs as options along with the
                contact information for who will be the admin.</p>
            <p>Also, the signature on this form will need to be signed by the owner, president, manager or someone with
                a similar title.</p>

            <p>Once the admin is created, then that person can create additional users. You can add your Subcode to the
                COID field and to the Product requested field.</p>
            <br/>
            <p> Please reply to <a href={`mailto:${eSupport}`} className="mailto">{eSupport}</a> attaching the form once you
                fill it
                out.</p>
            <p></p>
        </Fragment>
    );
};
export default HsdCreation;
