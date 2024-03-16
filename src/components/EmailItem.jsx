
const EmailItem = ({children, className}) => {
    return (
        <div className={`email-item ${className}`}>
            {children}
        </div>
    );
};
export default EmailItem;
