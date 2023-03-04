export const NOT_REGISTERED_MESSAGE = `
You are not yet registered in the running for any positions. 
If you would like to do so, click the "update my profile" button
above to declare your intent. If you need to upload nominations for 
someone, please ask them to send you a “request nominations” link.
`;
export const NOT_LOGGED_IN_MESSAGE = "please log in to Facebook.";
export const ELECTIONS_HEADER_TEXT = "2023 - 2024 Leadership Elections";
export const NO_VISION = "No Vision Available";
export const ELECTIONS_DEADLINE = "March 25th, 2023";
export const PROFILE_COMPLETE_MESSAGE =
  "Your profile is complete. No further actions are required at this time.";

export const STATUS = {
  WAITING: "WAITING",
  CONSIDERING: "CONSIDERING",
  DECIDED: "DECIDED",
};
export const COMMITTEE_POSITIONS = {
  CHAIR: "CHAIR",
  VICE_CHAIR: "VICE CHAIR",
  SECRETARY: "SECRETARY/TREASURER",
  MENS_DEVOTIONAL_LEADER: "MEN'S DEVOTIONAL LEADER",
  WOMENS_DEVOTIONAL_LEADER: "WOMEN'S DEVOTIONAL LEADER",
  WORSHIP_COORDINATOR: "WORSHIP COORDINATOR",
  SOCIAL_COORDINATOR: "SOCIAL COORDINATOR",
  OUTREACH_COORDINATOR: "OUTREACH COORDINATOR",
};
export const MINISTRY_POSITIONS = {
  INVESTMENT_GROUPS: "INVESTMENT GROUPS",
  MENS_MINISTRY: "MEN'S MINISTRY",
  WOMENS_MINISTRY: "WOMEN'S MINISTRY",
  FREEZER: "FREEZER",
  OUTREACH_MINISTRY: "OUTREACH MINISTRY",
  HOSPITALITY_MINISTRY: "HOSPITALITY MINISTRY",
  VITAMIN_MINISTRY: "VITAMIN MINISTRY",
  SPORTS_MINISTRY: "SPORTS MINISTRY",
  WORSHIP_MINISTRY: "WORSHIP MINISTRY",
  WORSHIP_TEAM_LEADER: "WORSHIP TEAM LEADER",
  WORSHIP_TEAM_MEMBER: "WORSHIP TEAM MEMBER",
};
export const CONSIDERING_POSITIONS = {
  ALL_ROLES: "ALL ROLES",
};
export const POSITION_REQUIREMENTS = {
  [COMMITTEE_POSITIONS.CHAIR]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.VICE_CHAIR]: {
    vision: true,
    nominations: 3,
  },
  [COMMITTEE_POSITIONS.SECRETARY]: {
    vision: true,
    nominations: 2,
  },
  [COMMITTEE_POSITIONS.TREASURER]: {
    vision: true,
    nominations: 2,
  },
  [COMMITTEE_POSITIONS.MENS_DEVOTIONAL_LEADER]: {
    vision: true,
    nominations: 2,
  },
  [COMMITTEE_POSITIONS.WOMENS_DEVOTIONAL_LEADER]: {
    vision: true,
    nominations: 2,
  },
  [COMMITTEE_POSITIONS.WORSHIP_COORDINATOR]: {
    vision: true,
    nominations: 2,
  },
  [COMMITTEE_POSITIONS.SOCIAL_COORDINATOR]: {
    vision: true,
    nominations: 2,
  },
  [COMMITTEE_POSITIONS.OUTREACH_COORDINATOR]: {
    vision: true,
    nominations: 2,
  },
  [MINISTRY_POSITIONS.INVESTMENT_GROUPS]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.MENS_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WOMENS_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.FREEZER]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.OUTREACH_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.HOSPITALITY_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.VITAMIN_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.SPORTS_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WORSHIP_MINISTRY]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WORSHIP_TEAM_LEADER]: {
    vision: false,
    nominations: 0,
  },
  [MINISTRY_POSITIONS.WORSHIP_TEAM_MEMBER]: {
    vision: false,
    nominations: 0,
  },
};

// @@@ For testing, delete later
// export const mockUser = {
//   name: "Marian",
//   position: [COMMITTEE_POSITIONS.CHAIR],
//   visionName: "hi there",
//   visionLink: "",
//   status: STATUS.WAITING,
//   nominations: [
//     {
//       nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//       name: "JdogDragon",
//     },
//     {
//       nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//       name: "JdogDragon13",
//     },
//   ],
// };

// export const mockCandidates = [
//   {
//     name: "Marian",
//     position: [COMMITTEE_POSITIONS.CHAIR],
//     visionName: "",
//     visionLink: "",
//     nominations: [
//       {
//         nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//         name: "JdogDragon",
//       },
//     ],
//   },
//   {
//     name: "Marian2",
//     position: [COMMITTEE_POSITIONS.CHAIR],
//     visionName: "my vision!",
//     visionLink: "https://www.youtube.com",
//     nominations: [
//       {
//         nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//         name: "JdogDragon2",
//       },
//       {
//         nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//         name: "JdogDragon3",
//       },
//     ],
//   },
//   {
//     name: "Marian3",
//     position: [
//       COMMITTEE_POSITIONS.CHAIR,
//       COMMITTEE_POSITIONS.SOCIAL_COORDINATOR,
//     ],
//     visionName: "my vision!",
//     visionLink: "https://www.youtube.com",
//     status: "CONSIDERING",
//     nominations: [
//       {
//         nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//         name: "JdogDragon2",
//       },
//       {
//         nomination: `
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco
//         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//         dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//         sunt in culpa qui officia deserunt mollit anim id est laborum.
//         `,
//         name: "JdogDragon3",
//       },
//     ],
//   },
// ];
