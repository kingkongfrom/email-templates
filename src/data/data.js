export const boilerplate = {
    greeting: "Thanks for reaching out our Technical Support Center.",
    tracking: "For Tracking and documentation we have initiated the ticket ",
    closing: "If further assistance is required please contact us at 1-800-854-7201 opt 3."
};

export const emails = [
    {
        type: "TSC", // Added type property to differentiate COE emails
        name: [
            {name: "Password reset", subject: "Password reset"},
            {name: "Account locked", subject: "Account unlocked"},
            {name: "Temporary password", subject: "[encrypt] Temporary password"},
            {name: "Account not found", subject: "Account not found"},
            {name: "HSD creation", subject: "Head Security Designate request"},
            {name: "Inquiry suppression request", subject: "Inquiry suppression request"},
            {name: "OKTA URL", subject: "Experian OKTA profile"},
            {name: "Origin URL", subject: "Experian admin portal"},
            {name: "BIQ env setup", subject: "Business IQ environment setup"},
            {name: "UAT API account request", subject: "UAT API account request"},
            {name: "SSH Key requirements", subject: "[encrypt] SSH Key requirements"},
            {name: "API Info Required", subject: "Information required"},
        ]
    }
];

export const coe = [
    {
        type: "COE", // Added type property to differentiate COE emails
        name: [
            {name: "Ascend handover", subject: "ASCEND SANDBOX"}
        ]
    }
];

