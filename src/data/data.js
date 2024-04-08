export const boilerplate = {
    greeting: "Thanks for reaching out our Technical Support Center.",
    csatGreeting: "Hope this email finds you well.",
    tracking: "For Tracking and documentation we have initiated the ticket ",
    closing: "If you experience any issues or have additional questions, please do not hesitate to contact us at ",
    tscContactNumber: "1-800-854-7201 opt 3.",
    profileMaintenanceNumber: "1-800-525-0689.",
    coeNumber: "844-397-0022",
    CDIAUsername: "CDIACRRG",
    CDIAPassword: "Metro2CD!@23",
    CISEmailAddress: "csdaclientcare@experian.com"
};

export const emails = [
    {
        type: "TSC", // Added type property to differentiate COE emails
        name: [
            {
                name: "Password reset",
                subject: "Password reset",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Account locked",
                subject: "Account unlocked",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Temporary password",
                subject: "[encrypt] Temporary password",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Account not found",
                subject: "Account not found",
                type: "TSC",
                favorite: false,
            },
            {
                name: "HSD creation",
                subject: "Head Security Designate request",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Inquiry suppression request",
                subject: "Inquiry suppression request",
                type: "TSC",
                favorite: false,
            },
            {
                name: "OKTA URL",
                subject: "Experian OKTA profile",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Origin URL",
                subject: "Experian admin portal",
                type: "TSC",
                favorite: false,
            },
            {
                name: "BIQ env setup",
                subject: "Business IQ environment setup",
                type: "TSC",
                favorite: false,
            },
            {
                name: "UAT API account request",
                subject: "UAT API account request",
                type: "TSC",
                favorite: false,
            },
            {
                name: "SSH Key requirements",
                subject: "[encrypt] SSH Key requirements",
                type: "TSC",
                favorite: false,
            },
            {
                name: "API Info Required",
                subject: "Information required",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Issue has been resolved",
                subject: "Your issue has been resolved",
                type: "TSC",
                favorite: false,
            },
            {
                name: "Case has been escalated",
                subject: "Your case has being escalated",
                type: "TSC",
                favorite: false,
            },

            {
                name: "CDIA email authentication",
                subject: "CDIA credentials request",
                type: "TSC",
                favorite: false,
            },
            {
                name: "CDIA username & password",
                subject: "[encrypt] CDIA username & password",
                type: "TSC",
                favorite: false,
            },
        ],
    },
];

export const coe = [
    {
        type: "COE", // Added type property to differentiate COE emails
        name: [
            {name: "Ascend handover", subject: "ASCEND SANDBOX", type: "COE", favorite: false,},
            {name: "Incident has been escalated", subject: "Your incident has been escalated", type: "COE", favorite: false,}
        ]
    }
];

