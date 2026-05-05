export type AdditionalServiceGroup = {
  slug: string;
  title: string;
  intro: string;
  keyBenefits: string[];
  sections: { title: string; items: string[] }[];
};

export const friendServicesPage = {
  eyebrow: "ADDITIONAL SERVICES",
  h1: "Desktop support and infrastructure work.",
  sub:
    "These offerings are separate from muteflow core. They exist as an add-on page and can be removed at any time.",
  groups: [
    {
      slug: "desktop-support",
      title: "Desktop Support Services",
      intro:
        "Day-to-day IT support designed to reduce downtime and keep teams productive.",
      keyBenefits: [
        "Improved system performance and reliability",
        "Reduced downtime and faster issue resolution",
        "Enhanced employee productivity",
        "Secure and up-to-date IT environment",
      ],
      sections: [
        {
          title: "Proactive Maintenance",
          items: ["Regular system health checks", "Performance optimization"],
        },
        {
          title: "Troubleshooting & Issue Resolution",
          items: ["Quick diagnosis and fixes", "On-site and remote support"],
        },
        {
          title: "Software Support",
          items: ["Installation and configuration", "Updates and patch management"],
        },
        {
          title: "Hardware Management",
          items: ["Upgrades and replacements", "Device setup and configuration"],
        },
        {
          title: "Security & Protection",
          items: ["Virus and malware protection", "System security updates"],
        },
        {
          title: "Data Management",
          items: ["Backup solutions", "Data recovery services"],
        },
        {
          title: "User Support",
          items: ["Helpdesk services", "End-user training"],
        },
        {
          title: "Monitoring",
          items: ["Continuous system monitoring", "Early issue detection"],
        },
      ],
    },
    {
      slug: "rollout-migration",
      title: "Rollout & Migration Services",
      intro:
        "Structured transitions that keep disruption low and execution predictable.",
      keyBenefits: [
        "Smooth and low-risk transitions",
        "Minimal operational downtime",
        "Cost-effective execution",
        "Scalable for all business sizes",
      ],
      sections: [
        {
          title: "System Rollouts",
          items: ["Deployment of new workplace systems", "OS and application rollouts"],
        },
        {
          title: "Migration Services",
          items: [
            "Workplace system migrations",
            "Data and application transfers",
          ],
        },
        {
          title: "Hardware Transition",
          items: [
            "Replacement of outdated equipment",
            "Installation of new hardware",
          ],
        },
        {
          title: "Project Execution",
          items: ["End-to-end planning and management", "Testing and validation"],
        },
        {
          title: "Risk Management",
          items: [
            "Downtime minimization strategies",
            "Secure and controlled migrations",
          ],
        },
      ],
    },
    {
      slug: "hardware-break-fix",
      title: "Hardware Break-Fix & Maintenance",
      intro:
        "Responsive repair and maintenance to extend the lifespan of critical equipment.",
      keyBenefits: [
        "Reduced equipment downtime",
        "Extended hardware lifecycle",
        "Fast response times",
        "Flexible on-site and off-site support",
      ],
      sections: [
        {
          title: "Servers & Storage",
          items: ["Server maintenance and repair", "Storage system support"],
        },
        {
          title: "Network Infrastructure",
          items: [
            "Routers, switches, and firewalls",
            "Connectivity issue resolution",
          ],
        },
        {
          title: "Communication Systems",
          items: ["Telecommunication equipment", "Audio-visual systems"],
        },
        {
          title: "End-User Devices",
          items: ["Desktop PCs and laptops", "Peripheral devices"],
        },
      ],
    },
    {
      slug: "imac-projects",
      title: "IMAC & IT Project Services",
      intro:
        "Install, Move, Add, Change services plus broader infrastructure and project support.",
      keyBenefits: [
        "Reduced downtime",
        "24/7 support availability",
        "Cost savings and efficiency",
        "Fast and reliable delivery",
        "Strong security practices",
      ],
      sections: [
        {
          title: "IMAC Services (Install, Move, Add, Change)",
          items: [
            "Device installations and setups",
            "Office relocations and reconfigurations",
            "System upgrades and changes",
          ],
        },
        {
          title: "Infrastructure Support",
          items: ["Desktop and network support", "Data center maintenance"],
        },
        {
          title: "Specialized Services",
          items: ["Wi-Fi surveys and optimization", "Hardware break-fix integration"],
        },
        {
          title: "Project Management",
          items: [
            "End-to-end IT project delivery",
            "Customized solutions based on business needs",
          ],
        },
      ],
    },
  ] as AdditionalServiceGroup[],
} as const;

