import { FiCodesandbox } from "react-icons/fi";
const Welcome = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>TSC | COE</h1>
            <p style={styles.text}>Select a template from the left panel to get started.</p>
            <FiCodesandbox style={styles.icon}/>

        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
    },
    heading: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#315375"
    },
    text: {
        fontSize: "1.2rem",
        color: "#444",
    },
    icon: {
        marginTop: "30px",
        fontSize: "5rem",
        color: "#315375"
    }
};

export default Welcome;
