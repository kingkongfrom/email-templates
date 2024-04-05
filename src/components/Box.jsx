/**
 * Component for rendering a box container with specified width.
 * @param {Object} props - The props passed to the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the box.
 * @param {string} props.width - The width of the box.
 * @returns {JSX.Element} The JSX element representing the box container.
 * @author Eduardo da Silva.
 */
const Box = ({ children, width }) => {
    return (
        <div className="box" style={{width}}>
            {children}
        </div>
    );
};
export default Box;
