export const boilerplate = {
    greeting: "Thanks for reaching out our Technical Support Center.",
    csatGreeting: "Hope this email finds you well.",
    tracking: "For Tracking and documentation we have initiated the ticket ",
    closing: "If you experience any further issues or have additional questions, please do not hesitate to contact us at ",
    tscContactNumber: "1-800-854-7201 opt 3.",
    profileMaintenanceNumber: "1-800-525-0689.",
    coeNumber: "844-397-0022",
};

export const emails = [
    {
        type: "TSC", // Added type property to differentiate COE emails
        name: [
            {name: "Password reset", subject: "Password reset", type: "TSC"},
            {name: "Account locked", subject: "Account unlocked", type: "TSC"},
            {name: "Temporary password", subject: "[encrypt] Temporary password", type: "TSC"},
            {name: "Account not found", subject: "Account not found", type: "TSC"},
            {name: "HSD creation", subject: "Head Security Designate request", type: "TSC"},
            {name: "Inquiry suppression request", subject: "Inquiry suppression request", type: "TSC"},
            {name: "OKTA URL", subject: "Experian OKTA profile", type: "TSC"},
            {name: "Origin URL", subject: "Experian admin portal", type: "TSC"},
            {name: "BIQ env setup", subject: "Business IQ environment setup", type: "TSC"},
            {name: "UAT API account request", subject: "UAT API account request", type: "TSC"},
            {name: "SSH Key requirements", subject: "[encrypt] SSH Key requirements", type: "TSC"},
            {name: "API Info Required", subject: "Information required", type: "TSC"},
            {name: "Issue has been resolved", subject: "Your issue has been resolved", type: "TSC"},
            {name: "Case has been escalated", subject: "Your case has being escalated", type: "CSAT"},
        ]
    }
];

export const coe = [
    {
        type: "COE", // Added type property to differentiate COE emails
        name: [
            {name: "Ascend handover", subject: "ASCEND SANDBOX", type: "COE"},
            {name: "Incident has been escalated", subject: "Your incident has been escalated", type: "COE"}
        ]
    }
];

