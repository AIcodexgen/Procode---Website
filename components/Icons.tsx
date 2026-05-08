"use client";

export const LogoMark = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#6366F1" />
    <path
      d="M8 11L13 16L8 21"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 20H24"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BuildIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 13V21M13 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ConsultIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 21C3 17.686 5.686 15 9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17" cy="17" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 15V17L18.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AIIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14.5 8.5L21 7L17 13L21 17L14.5 15.5L12 22L9.5 15.5L3 17L7 13L3 7L9.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const AutomationIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const APIIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1L9.854 5.764L15 6.472L11.5 9.636L12.472 15L8 12.354L3.528 15L4.5 9.636L1 6.472L6.146 5.764L8 1Z" />
  </svg>
);

export const CalendarIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <rect x="2.5" y="3.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 2V5M13.5 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2.5 8.5H17.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 7L10 12L17.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
    <path d="M16.667 2.5H3.333A.833.833 0 002.5 3.333v13.334c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V3.333A.833.833 0 0016.667 2.5zM7.083 14.583H5.417V8.333h1.666v6.25zM6.25 7.583a.917.917 0 110-1.833.917.917 0 010 1.833zm8.333 7H12.917v-3.25c0-.75-.013-1.712-1.042-1.712-1.042 0-1.208.813-1.208 1.656v3.306H8.958V8.333h1.584v.854h.02c.22-.417.76-.854 1.563-.854 1.667 0 1.979 1.1 1.979 2.527l-.021 3.723z" />
  </svg>
);

export const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667C5.397 1.667 1.667 5.397 1.667 10c0 3.686 2.39 6.81 5.706 7.912.417.077.57-.18.57-.402 0-.198-.007-.724-.011-1.42-2.32.504-2.81-1.118-2.81-1.118-.38-.964-.927-1.22-.927-1.22-.757-.518.057-.507.057-.507.839.059 1.28.86 1.28.86.745 1.276 1.954.908 2.43.694.076-.54.292-.908.53-1.116-1.851-.21-3.797-.925-3.797-4.12 0-.91.325-1.654.858-2.237-.086-.21-.372-1.058.081-2.206 0 0 .699-.224 2.29.853A7.95 7.95 0 0110 6.177c.708.003 1.421.095 2.086.28 1.59-1.077 2.288-.854 2.288-.854.455 1.149.169 1.997.083 2.207.534.583.857 1.327.857 2.236 0 3.203-1.949 3.907-3.805 4.113.299.258.566.767.566 1.546 0 1.116-.01 2.015-.01 2.29 0 .224.15.484.574.402C15.945 16.807 18.333 13.685 18.333 10c0-4.603-3.73-8.333-8.333-8.333z" />
  </svg>
);

export const ProcessIcon = ({ step }: { step: number }) => (
  <div
    style={{
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(99,102,241,0.12)",
      border: "1px solid rgba(99,102,241,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#818CF8",
      fontWeight: 700,
      fontSize: 14,
      flexShrink: 0,
    }}
  >
    {step}
  </div>
);

export const QuoteIcon = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path d="M0 24V14.4C0 10.667 0.933 7.6 2.8 5.2C4.667 2.8 7.333 1.067 10.8 0L12.8 3.2C10.267 4.133 8.4 5.467 7.2 7.2C6 8.933 5.467 10.933 5.6 13.2H10.4V24H0ZM18.4 24V14.4C18.4 10.667 19.333 7.6 21.2 5.2C23.067 2.8 25.733 1.067 29.2 0L31.2 3.2C28.667 4.133 26.8 5.467 25.6 7.2C24.4 8.933 23.867 10.933 24 13.2H28.8V24H18.4Z" fill="currentColor" />
  </svg>
);

export const ExternalLinkIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M5.5 2.5H2.5C2 2.5 1.5 3 1.5 3.5V11.5C1.5 12 2 12.5 2.5 12.5H10.5C11 12.5 11.5 12 11.5 11.5V8.5M8.5 1.5H12.5V5.5M12.5 1.5L6.5 7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FilterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M2 4H14M5 8H11M7.5 12H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ClockIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.25" />
    <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
