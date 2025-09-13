// TYPES
export type TEstate = {
  id: string;
  name: string;
  code: string;
  address: string;
  image: string;
  area: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  is_active: boolean;
  number_of_occupants?: string;
  total_members?: string;
  total_executives?: string;
  amount_generated?: string;
  number_of_projects?: string;
};

export type TPollResponse = {
  option: string;
  votes: number;
  voters: TUser[];
};

export type TPoll = {
  id: string;
  title: string;
  question: string;
  response: TPollResponse[];
  poll_duration: string;
  voters: TUser[];
  pollStatus: 'pending' | 'completed';
  created_at: string;
  created_by: string;
};

export type TProject = {
  id: string;
  estate: string;
  created_by: string;
  title: string;
  description: string;
  target_amount: string;
  amount_raised: string;
  donation_type: 'EQUAL' | 'PROPORTIONAL';
  status: 'ACTIVE' | 'INACTIVE' | 'COMPLETED';
  start_date: string;
  end_date: string;
  is_recurring: boolean;
  created_at: string;
  recurrence_interval: null;
  people_paid_count: number;
  people_required_count: number;
};

export type TUser = {
  id: string;
  email: string;
  phone_number: string;
  username: string | null;
  first_name: string;
  last_name: string;
  profile_image: string;
  is_active: boolean;
  is_verified: boolean;
  google_id: string | null;
  apple_id: string | null;
  role: 'admin' | 'resident' | 'estate manager';
  unit?: string; // e.g. '10A', '10B'
  apartment?: string;
  block?: string;
  estates: TEstate[];
  default_estate: TEstate;
  wallet_balance: number;
  created_at: string;
  updated_at: string;
};

// CONSTANTS
const estate: TEstate = {
  id: '56dea776-013f-407b-8be7-cf0c2e810d63',
  name: 'Sunshine Estate',
  code: '380924',
  address: '123 Estate Road',
  city: 'Lagos',
  state: 'Lagos',
  country: 'Nigeria',
  postal_code: '100001',
  is_active: true,
  image: "",
  area: ""
};

const mockUserData: TUser = {
  id: 'beb50979-68f5-4d1b-a5a0-9cea31bccfd2',
  email: 'joe3@gmail.com',
  phone_number: '+2348123456785',
  username: null,
  first_name: 'Jane',
  last_name: 'Smith',
  profile_image:
    'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  is_active: true,
  is_verified: true,
  google_id: null,
  apple_id: null,
  role: 'admin',
  estates: [
    {
      id: '56dea776-013f-407b-8be7-cf0c2e810d63',
      name: 'Sunshine Estate',
      code: '380924',
      address: '123 Estate Road Lekki',
      area: 'Lekki',
      city: 'Lagos',
      state: 'Lagos',
      image: '',
      country: 'Nigeria',
      number_of_occupants: '100',
      total_members: '120',
      total_executives: '8',
      amount_generated: '$5,350.23',
      number_of_projects: '5',
      postal_code: '100001',
      is_active: true,
    },
  ],
  default_estate: {
    id: '56dea776-013f-407b-8be7-cf0c2e810d63',
    name: 'Sunshine Estate',
    code: '380924',
    address: '123 Estate Road',
    area: 'Lekki',
    image: '',
    city: 'Lagos',
    state: 'Lagos',
    country: 'Nigeria',
    number_of_occupants: '100',
    total_members: '120',
    total_executives: '8',
    amount_generated: '$5,350.23',
    number_of_projects: '5',
    postal_code: '100001',
    is_active: true,
  },
  wallet_balance: 10000.0,
  created_at: '2025-05-20T11:02:56.602551Z',
  updated_at: '2025-05-20T11:04:14.272989Z',
};

const mockUsers: TUser[] = [
  mockUserData,
  {
    ...mockUserData,
    id: 'user-2',
    email: 'tolani@example.com',
    first_name: 'Tolani',
    last_name: 'George',
    role: 'estate manager',
  },
  {
    ...mockUserData,
    id: 'user-3',
    email: 'amina@example.com',
    first_name: 'Amina',
    last_name: 'Usman',
    role: 'resident',
    unit: '10A',
  },
  {
    ...mockUserData,
    id: 'user-4',
    email: 'bayo@example.com',
    first_name: 'Bayo',
    last_name: 'Akinyele',
    role: 'resident',
    unit: '10B',
  },
];

// MOCK PROJECTS
const Projectdata: TProject[] = [
  {
    id: '1',
    estate: estate.id,
    created_by: '27377337733',
    title: 'Security Upgrade',
    description: 'New Security Camera For the Estate',
    target_amount: '5000',
    amount_raised: '222',
    donation_type: 'EQUAL',
    status: 'ACTIVE',
    start_date: '2025-05-01T00:00:00Z',
    end_date: '2025-05-01T00:00:00Z',
    is_recurring: false,
    recurrence_interval: null,
    created_at: '373773733',
    people_paid_count: 20,
    people_required_count: 20,
  },
  {
    id: '2',
    estate: estate.id,
    created_by: '27377337733',
    title: 'Security Upgrade',
    description: 'New Security Camera For the Estate',
    target_amount: '7000',
    amount_raised: '122',
    donation_type: 'EQUAL',
    status: 'ACTIVE',
    start_date: '2025-05-01T00:00:00Z',
    end_date: '2025-05-01T00:00:00Z',
    is_recurring: false,
    recurrence_interval: null,
    created_at: '373773733',
    people_paid_count: 20,
    people_required_count: 20,
  },
  {
    id: '3',
    estate: estate.id,
    created_by: '27377337733',
    title: 'Security Upgrade',
    description: 'New Security Camera For the Estate',
    target_amount: '1000',
    amount_raised: '1222',
    donation_type: 'EQUAL',
    status: 'ACTIVE',
    start_date: '2025-05-01T00:00:00Z',
    end_date: '2025-05-01T00:00:00Z',
    is_recurring: false,
    recurrence_interval: null,
    created_at: '373773733',
    people_paid_count: 20,
    people_required_count: 25,
  },
  {
    id: '4',
    estate: estate.id,
    created_by: '27377337733',
    title: 'Security Upgrade',
    description: 'New Security Camera For the Estate',
    target_amount: '1000',
    amount_raised: '122',
    donation_type: 'EQUAL',
    status: 'ACTIVE',
    start_date: '2025-05-01T00:00:00Z',
    end_date: '2025-05-01T00:00:00Z',
    is_recurring: false,
    recurrence_interval: null,
    created_at: '373773733',
    people_paid_count: 7,
    people_required_count: 25,
  },
  {
    id: '5',
    estate: estate.id,
    created_by: '27377337733',
    title: 'Security Upgrade',
    description: 'New Security Camera For the Estate',
    target_amount: '1500',
    amount_raised: '12200',
    donation_type: 'EQUAL',
    status: 'ACTIVE',
    start_date: '2025-05-01T00:00:00Z',
    end_date: '2025-05-01T00:00:00Z',
    is_recurring: false,
    recurrence_interval: null,
    created_at: '373773733',
    people_paid_count: 25,
    people_required_count: 25,
  },
  {
    id: '6',
    estate: estate.id,
    created_by: '27377337733',
    title: 'Security Upgrade',
    description: 'New Security Camera For the Estate',
    target_amount: '180',
    amount_raised: '120',
    donation_type: 'EQUAL',
    status: 'ACTIVE',
    start_date: '2025-05-01T00:00:00Z',
    end_date: '2025-05-01T00:00:00Z',
    is_recurring: false,
    recurrence_interval: null,
    created_at: '373773733',
    people_paid_count: 2,
    people_required_count: 25,
  },
];

export const MockMembersData: TUser[] = [
  {
    id: 'user-1',
    email: 'member1@example.com',
    phone_number: '+2348012345671',
    username: 'resident01',
    first_name: 'Emeka',
    last_name: 'Okafor',
    profile_image: 'https://randomuser.me/api/portraits/men/1.jpg',
    is_active: true,
    is_verified: true,
    google_id: null,
    apple_id: null,
    role: 'resident',
    estates: [],
    default_estate: mockUserData.default_estate,
    wallet_balance: 3500,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'user-2',
    email: 'member2@example.com',
    phone_number: '+2348012345672',
    username: 'resident02',
    first_name: 'Aisha',
    last_name: 'Bello',
    profile_image: 'https://randomuser.me/api/portraits/women/2.jpg',
    is_active: true,
    is_verified: true,
    google_id: null,
    apple_id: null,
    role: 'resident',
    estates: [],
    default_estate: mockUserData.default_estate,
    wallet_balance: 4200,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

];

export const MockExecutivesData: TUser[] = [
  {
    id: 'exec-1',
    email: 'chairman@example.com',
    phone_number: '+2348012345673',
    username: 'chairman01',
    first_name: 'Tunde',
    last_name: 'Adelakun',
    profile_image: 'https://randomuser.me/api/portraits/men/3.jpg',
    is_active: true,
    is_verified: true,
    google_id: null,
    apple_id: null,
    role: 'admin',
    estates: [],
    default_estate: mockUserData.default_estate,
    wallet_balance: 15000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'exec-2',
    email: 'secretary@example.com',
    phone_number: '+2348012345674',
    username: 'secretary01',
    first_name: 'Ngozi',
    last_name: 'Umeh',
    profile_image: 'https://randomuser.me/api/portraits/women/4.jpg',
    is_active: true,
    is_verified: true,
    google_id: null,
    apple_id: null,
    role: 'admin',
    estates: [],
    default_estate: mockUserData.default_estate,
    wallet_balance: 8000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

];

export const getMockMembers = (): TUser[] => MockMembersData;
export const getMockExecutives = (): TUser[] => MockExecutivesData;
// MOCK POLLS
const mockPollData: TPoll[] = [
  {
    id: '1',
    title: 'Meeting Date',
    question: 'What day shall we meet?',
    response: [
      {
        option: '25 September 8am',
        votes: 120,
        voters: [mockUsers[0], mockUsers[1]],
      },
      { option: '26 September 12pm', votes: 10, voters: [mockUsers[2]] },
      { option: '1 October 10am', votes: 5, voters: [mockUsers[3]] },
      { option: '1 October 3pm', votes: 1, voters: [] },
    ],
    poll_duration: '12 hours',
    voters: [mockUsers[0], mockUsers[1], mockUsers[2], mockUsers[3]],
    pollStatus: 'pending',
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    created_by: 'user-2',
  },
  {
    id: '2',
    title: 'New Security Provider',
    question: 'Which security company should we hire?',
    response: [
      { option: 'SecureTech', votes: 2, voters: [mockUsers[0]] },
      { option: 'SafeZone Ltd', votes: 1, voters: [mockUsers[1]] },
      { option: 'Vigilant Force', votes: 1, voters: [mockUsers[2]] },
    ],
    poll_duration: '24 hours',
    voters: [mockUsers[0], mockUsers[1], mockUsers[2]],
    pollStatus: 'pending',
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    created_by: 'user-3',
  },
  {
    id: '3',
    title: 'Power Generator Purchase',
    question: 'What generator size should we purchase?',
    response: [
      { option: '20KVA', votes: 1, voters: [mockUsers[0]] },
      { option: '30KVA', votes: 0, voters: [] },
      { option: 'None', votes: 0, voters: [] },
    ],
    poll_duration: '6 hours',
    voters: [mockUsers[0]],
    pollStatus: 'pending',
    created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    created_by: 'user-4',
  },
  {
    id: '4',
    title: 'Monthly Maintenance Fee',
    question: 'Should we increase the monthly fee from ₦5000 to ₦7000?',
    response: [
      { option: 'Yes', votes: 0, voters: [] },
      { option: 'No', votes: 0, voters: [] },
      { option: 'Maybe', votes: 0, voters: [] },
    ],
    poll_duration: '48 hours',
    voters: [],
    pollStatus: 'pending',
    created_at: new Date().toISOString(),
    created_by: 'beb50979-68f5-4d1b-a5a0-9cea31bccfd2',
  },
  {
    id: '5',
    title: 'Park Cleaning Schedule',
    question: 'Which day should we schedule the park cleaning?',
    response: [
      { option: 'Monday', votes: 1, voters: [mockUsers[0]] },
      { option: 'Wednesday', votes: 1, voters: [mockUsers[1]] },
      { option: 'Friday', votes: 1, voters: [mockUsers[2]] },
    ],
    poll_duration: '1 hour',
    voters: [mockUsers[0], mockUsers[1], mockUsers[2]],
    pollStatus: 'completed',
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    created_by: 'user-2',
  },
  {
    id: '6',
    title: 'New Gym Equipment',
    question: 'Should we buy new gym equipment?',
    response: [
      { option: 'Yes', votes: 1, voters: [mockUsers[0]] },
      { option: 'No', votes: 0, voters: [] },
    ],
    poll_duration: '2 hours',
    voters: [mockUsers[0]],
    pollStatus: 'completed',
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    created_by: 'user-3',
  },
];

// EXPORTS
export const MockUser = (): TUser => {
  return mockUserData;
};
export const MockUsers = (): TUser[] => mockUsers;
export const MockProjectData = (): TProject[] => Projectdata;
export const MockPollData = (): TPoll[] => mockPollData;
