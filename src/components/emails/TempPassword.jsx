import { Fragment } from "react";

const TempPassword = ({ setSubject, tempPassword }) => {
    setSubject("[encrypt] | Account locked");
    const resetUrl = "https://experian-nab.okta.com";
    return (
        <Fragment>
            <p>Your account has been unlocked, please, use the following URL and temporary password in order to gain
                access to your account.</p>
            <br/>
            <p>Password reset URL: <a href={resetUrl} className="url">{resetUrl}</a></p>
            <p>Temporary Password: <span className="temp-password">{tempPassword}</span></p>
            <br/>
            <p>Keep in mind, the old password is the same temporary password provided above.</p>
            <br/>
            <p>Please, make sure you are using at least one of the following characters on your new password:</p>
            <ul>
                <li>Upper case character</li>
                <li>Lower case character</li>
                <li>Numeric character</li>
                <li>Special character</li>
            </ul>

            <ul className="circle">
                <li>
                    Not allowed:
                    <span className="bold"> &#37; &#94; &amp; &#46; &#42; &apos; &#59; &#123; &#125; &#36; &#43; &#124;
                        &#41; &#40; &#91; &#93; &lt;,&gt; &#33; &#47;</span>
                </li>
                <li>
                    Allowed:
                    <span className="bold"> # - @ _ :</span>
                </li>
            </ul>
        </Fragment>
    );
};
export default TempPassword;
