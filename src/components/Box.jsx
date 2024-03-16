
const Box = ({ children, width }) => {
    return (
        <div className="box" style={{width}}>
            {children}
        </div>
    );
};
export default Box;
