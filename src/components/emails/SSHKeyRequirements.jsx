import { Fragment } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard.js";
import { FiCopy } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import { boilerplate } from "../../data/data.js";


const SSHKeyRequirements = ({ setSubject, caseNumber, clientName, capitalize }) => {

    const [jsxContentRef, copyToClipboard] = useCopyToClipboard();
    setSubject("SSH Key requirements");

    return (
        <Fragment>
            <div ref={jsxContentRef} className="email-body">
                <p>Dear {clientName === "" ? "Client," : `${capitalize(clientName)},`}</p>
                <p>{boilerplate.greeting}</p>

                {caseNumber &&
                    <Fragment>
                        <p>{boilerplate.tracking}<span className="bold">{caseNumber.toUpperCase()}</span>.</p>
                        <br/>
                    </Fragment>
                }
                <br/>
                <h4>SSH Key requirements</h4>
                <p>Using an SSH key will replace the need of using a password. SSH keys are valid for 3 years and cannot
                    be reused with the same id.</p>

                <p>A valid key needs to comply with this:</p>

                <ul>
                    <li>SSH2 (Maximum 2048 bits) or SSH 4K (Maximum 4096 bits)</li>
                    <li>RSA algorithm</li>
                    <li>At least 1 static IP address or IP range in Origin</li>
                </ul>

                <br/>
                <p className="bold">SSH Key example:</p>
                <p>AAAAB3NzaC1yc2EAAAABIwAAAQEAuOhAq4lDlCoVNQAp+K3BDSRasDljoI3FXc</p>
                <p>/xJo4H+mEp4vhIvF8m8+03/1PUyUWvlOE+ 8Ugh9PyyRmFi6unyIRAOWEBKua</p>
                <p>+cvnoQbJs9CqS1t80ocYSgQV2UqZJo/n7FqsdR0Hoo7WIig/dTuH92VKutglS</p>
                <p>jTlB0SR/8QnVyNezC4bbnXEwBL XkSPWTqtIfmdRYmpRX68Q4poD8Ll/EoMww</p>
                <p>rBG1S0CqQPDHqAeWjEc/yzKxeaThReu/RDY8GI8kwE/i84zkZzVs9qEotScqM</p>
                <p>5ELdstbHZiGrvTG9N LVDgEUoEYSrQOjlnIxwfKTiALElVMvsoQPLvrfZQSV6</p>
                <p>aUJV+Q==</p>
                <br/>

                <p className="bold">Invalid example:</p>
                <p>AAAAB3NzaC1yc2EAAAABIwAAAQEAuOhAq4lDlCoVNQAp+K3BDSRasDljoI3FXc</p>
                <p>/xJo4H+mEp4vhIvF8m8+03/1PUyUWvlOE+8Ugh9PyyRmFi6unyIRAOWEBKua+</p>
                <p>cvnoQbJs9CqS1t80ocYSgQV2UqZJo/n7FqsdR0Hoo7WIig/dTuH92VKutglSj</p>
                <p>TlB0SR/8QnVyNezC4bbnXEwBLXkSP WTqtIfmdRYmpRX68Q4poD8Ll/EoMwwr</p>
                <p>BG1S0CqQPDHqAeWjEc/yzKxeaThReu/RDY8GI8kwE/i84zkZzVs9qEotScqM5</p>
                <p>ELdstbHZiGrvTG9NLVDgEUoEYSrQOjlnIxwfKTiALElVMvsoQPLvrfZQSV6aU</p>
                <p>JV+Q== appworx@hxncis11</p>
                <br/>
                <p>{boilerplate.closing}</p>
            </div>

            <FiCopy className="copy-icon-body" onClick={copyToClipboard}/>
            <ToastContainer/>
        </Fragment>
    )
        ;
};
export default SSHKeyRequirements;
