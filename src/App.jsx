import { Fragment, useState } from "react";
import Main from "./components/Main.jsx";
import Box from "./components/Box.jsx";
import "./styles/style.css";
import EmailList from "./components/EmailList.jsx";
import EmailDetails from "./components/EmailDetails.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
    const [selectedEmail, setSelectedEmail] = useState({ name: null, subject: null, id: null, type: null });

    return (
        <Fragment>
            <Main>
                <Box width={400}>
                    <EmailList selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail}/>
                </Box>
                <Box width={800}>
                    {selectedEmail.id === null && <Welcome />}
                    {selectedEmail.id && <EmailDetails selectedEmail={selectedEmail} setSelectedEmail={setSelectedEmail} />}
                </Box>
            </Main>
        </Fragment>
    );
}

export default App;
