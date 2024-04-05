/**
 * Component for rendering an email item container.
 * @param {Object} props - The props passed to the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the email item.
 * @param {string} props.className - The additional class name for styling purposes.
 * @returns {JSX.Element} The JSX element representing the email item container.
 * @author Eduardo da Silva.
 */
const EmailItem = ({children, className}) => {
    return (
        <div className={`email-item ${className}`}>
            {children}
        </div>
    );
};
export default EmailItem;
