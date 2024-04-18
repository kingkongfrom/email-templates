import { Fragment, useState } from "react";
import Main from "./components/Main.jsx";
import Box from "./components/Box.jsx";
import "./styles/style.css";
import EmailList from "./components/EmailList.jsx";
import EmailDetails from "./components/EmailDetails.jsx";
import Boilerplate from "./components/Boilerplate.jsx";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered main component.
 * @author Eduardo da Silva.
 * @copyright Copyright (c) 2024 Eduardo da Silva.
 */
function App() {
    /**
     * State for managing the selected email and toggled state.
     * @type {[{ name: string, subject: string, id: number, type: string }, Function]} selectedEmail - State for selected email.
     * @type {[boolean, Function]} isToggled - State for toggling email details view.
     */
    const [selectedEmail, setSelectedEmail] = useState({ name: null, subject: null, id: null, type: null });
    const [isToggled, setIsToggled] = useState(true);

    /**
     * Toggles the email details view.
     * @returns {void}
     */
    const handleToggle = () => {
        setIsToggled((toggled) => !toggled);
    };

    return (
        <Fragment>
            <Main>
                <Box width={400}>
                    <EmailList selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} setIsToggled={setIsToggled} />
                </Box>
                <Box width={800}>
                    <div className="details-header">
                        <h2 className="title">{isToggled ? "Boilerplate" : selectedEmail.name}</h2>
                        {isToggled ? <FaPlusCircle onClick={handleToggle} className="toggle"/> : <FaMinusCircle onClick={handleToggle} className="toggle"/>}
                    </div>

                    {!isToggled ?
                        selectedEmail.id &&
                        <EmailDetails selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail}/>
                        :
                        <Boilerplate/>
                    }
                </Box>
            </Main>
        </Fragment>
    );
}

export default App;
