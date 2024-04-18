/**
 * Initial state for input fields.
 * @type {Object}
 *
 */
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
    accountRepName: "",
    encryption: false,
};

/**
 * Reducer function to manage state changes for input fields.
 * This reducer handles various actions to update specific fields in the state.
 * @param {Object} state - The current state containing input field values.
 * @param {Object} action - The action object containing the type and payload.
 * @param {string} action.type - The type of action to perform.
 * @param {*} action.payload - The data payload associated with the action.
 * @returns {Object} The new state after applying the action.
 * @throws {Error} Throws an error if the action type is not recognized.
 * @author Eduardo da Silva.
 */
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
        case "setAccountRepName":
            return {
                ...state,
                accountRepName: action.payload
            };
        case "setEncryption":
            return {
                ...state,
                encryption: !state.encryption,
            };
        default:
            throw new Error("Action not defined");
    }
};

export { initialState, reducer };
