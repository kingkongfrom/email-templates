import { Fragment, useEffect, useState } from "react";
import Main from "./components/Main.jsx";
import Box from "./components/Box.jsx";
import "./styles/style.css";
import EmailList from "./components/EmailList.jsx";
import EmailDetails from "./components/EmailDetails.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
    const [selectedEmail, setSelectedEmail] = useState({ subject: null, id: null, name: null });

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
                setSelectedEmail({ subject: null, id: null, name: null })
            }
        });
    }, []);

    return (
        <Fragment>
            <Main>
                <Box width={400}>
                    <EmailList setSelectedEmail={setSelectedEmail} selectedEmail={selectedEmail} />
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
