const initialState = {
    clientName: "",
    caseNumber: "",
    tempPassword: "",
    hsd: "",
    userID: "",
    contactName: "",
    companyName: "",
    emailAddress: "",
    incidentNumber: "",
    phoneNumber: "",
    shortDescription: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setClientName":
            return {
                ...state,
                clientName: action.payload,
            };
        case "setCaseNumber":
            return {
                ...state,
                caseNumber: action.payload,
            };
        case "setTempPassword":
            return {
                ...state,
                tempPassword: action.payload,
            };
        case "setHsd":
            return {
                ...state,
                hsd: action.payload,
            };
        case "setUserId":
            return {
                ...state,
                userId: action.payload,
            };
        case "setContactName":
            return {
                ...state,
                contactName: action.payload,
            };
        case "setCompanyName":
            return {
                ...state,
                companyName: action.payload,
            };
        case "setEmailAddress":
            return {
                ...state,
                emailAddress: action.payload,
            };
        case "setIncidentNumber":
            return {
                ...state,
                incidentNumber: action.payload,
            };
        case "setPhoneNumber":
            return {
                ...state,
                phoneNumber: action.payload,
            };
        case "setShortDescription":
            return {
                ...state,
                shortDescription: action.payload,
            };
        default:
            throw new Error("Action not defined");
    }
};

export { initialState, reducer };
