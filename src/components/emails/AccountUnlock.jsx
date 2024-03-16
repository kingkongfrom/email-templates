import { Fragment } from "react";

const AccountUnlock = ({ setSubject }) => {
    setSubject("Account locked");
    return (
        <Fragment>
            <p>As requested your account has been unlocked, please try login to your account using your current password.</p>
        </Fragment>
    );
};
export default AccountUnlock;
