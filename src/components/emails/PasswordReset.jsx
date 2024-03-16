import { Fragment } from "react";

const PasswordReset = ({ setSubject }) => {
    setSubject("Password reset");
    return (
        <Fragment>
            <p>As requested, we have generated a password reset which will be delivered on a
                separate email.</p>
            <p>Keep in mind the password reset would be valid for 1 hour only, re-used passwords can
                not be utilized.</p>
            <br/>
            <p>The password should contain at least 8 characters including: </p>
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
export default PasswordReset;
