import { Fragment, useState } from "react";
import Main from "./components/Main.jsx";
import Box from "./components/Box.jsx";
import "./styles/style.css";
import EmailList from "./components/EmailList.jsx";
import EmailDetails from "./components/EmailDetails.jsx";
import Welcome from "./components/Welcome.jsx";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";


function App() {
    const [selectedEmail, setSelectedEmail] = useState({ name: null, subject: null, id: null, type: null });
    const [isToggled, setIsToggled] = useState(true);


    const handleToggle = () => {
        setIsToggled((toggled) => !toggled);
    };

    return (
        <Fragment>
            <Main>
                <Box width={400}>
                    <EmailList selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} setIsToggled={setIsToggled}/>
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
                        <Welcome/>
                    }

                </Box>
            </Main>
        </Fragment>
    );
}

export default App;
