import { Fragment, useState } from "react";
import Main from "./components/Main.jsx";
import Box from "./components/Box.jsx";
import "./styles/style.css";
import TemplateList from "./components/TemplateList.jsx";
import EmailDetails from "./components/EmailDetails.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
    const [selectedEmail, setSelectedEmail] = useState({ subject: null, id: null, name: null });
    return (
        <Fragment>
            <Main>
                <Box width={400}>
                    <TemplateList setSelectedEmail={setSelectedEmail} selectedEmail={selectedEmail} />
                </Box>
                <Box width={700}>
                    {selectedEmail.id === null && <Welcome />}
                    {selectedEmail.id && <EmailDetails selectedEmail={selectedEmail} />}
                </Box>
            </Main>
        </Fragment>
    );
}

export default App;
