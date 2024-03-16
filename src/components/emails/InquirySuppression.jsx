import { Fragment } from "react";

const InquirySuppression = ({ setSubject }) => {
    setSubject("Inquiry suppression request");
    const mailto = "profilemaintenancedept@experian.com"
    return (
        <Fragment>
            <p>Below are the requirements for submitting requests to Experian’s Profile Maintenance team to have a hard inquiry on a consumer’s credit report suppressed.</p>
            <p>Please note that they will change the inquiry from posting as a hard to a soft inquiry.</p>
            <p>The inquiry will not be completely removed since the consumer’s credit report was in fact accessed.</p>
            <p></p>
            <p>Email the following information with attention to: Experian Profile Maintenance at: <a href={`mailto:${mailto}`} className="mailto">{mailto}</a> </p>
            <br/>
            <p>INQUIRY SUPPRESSION REQUESTS</p>
            <p>The following items are REQUIRED on all requests in order to be processed:</p>
            <ul>
                <li>Request must be on a company letter head</li>
                <li>Must be signed by a company officer</li>
                <ol>
                    <li>An employee of the company authorized within your organization to make these changes.</li>
                    <li>If the request has multiple pages of consumers listed, then the signature must be on each page.</li>
                    <ul>
                        <li>Date of Inquiry</li>
                        <li>Specific reason for suppression</li>
                        <ol>
                            <li>The reason for suppression needs to be a valid reason. A reason such as “the consumer wants it removed” is not a valid reason.</li>
                            <li>If the request has multiple pages of consumers listed, then the reason must be on each page as well.</li>
                        </ol>
                    </ul>
                </ol>
            </ul>
            <p>Consumer's information</p>
            <ol>
                <li>Full name</li>
                <li>Complete SSN</li>
                <li>Complete address</li>
                <li>DOB (if available)</li>
                <li>Experian subscriber code (Preferred but not required)</li>
            </ol>
            <p></p>
            <p></p>
            <p></p>


        </Fragment>
    );
};
export default InquirySuppression;
