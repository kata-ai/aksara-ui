/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DummyData {
  [key: string]: any;
  id: number;
  contactMeta: ContactMeta;
  channelMeta: ChannelMeta;
  receivedAt: string;
  lastUpdatedAt: string;
  statusMeta: StatusMeta;
  agentMeta?: AgentMeta;
}

export interface ContactMeta {
  name: string;
  avatarColor: string;
  link?: string;
}

export interface ChannelMeta {
  name: string;
  icon: 'wa' | 'ig';
}

export interface StatusMeta {
  name: string;
  variant: 'default' | 'active' | 'info' | 'critical' | 'success' | 'warning';
}

export interface AgentMeta {
  disabled: boolean;
  agents: string[];
}

export const dummyColumns: Column[] = [
  {
    Header: 'Contact',
    accessor: 'contactMeta',
    canSort: true,
    sortType: (rowA, rowB) => {
      return rowA.values.contactMeta.name > rowB.values.contactMeta.name ? 1 : -1;
    },
  }, // custom function
  { Header: 'Channel', accessor: 'channelMeta', canSort: false },
  { Header: 'Received at', accessor: 'receivedAt', canSort: true },
  { Header: 'Last updated at', accessor: 'lastUpdatedAt', canSort: true },
  { Header: 'Status', accessor: 'statusMeta', canSort: false, style: { width: '130px' } },
  { Header: 'Agent', accessor: 'agentMeta', canSort: false },
];

export interface Column {
  Header: string;
  accessor: string;
  canSort: boolean;
  sortType?: (rowA: any, rowB: any) => 1 | -1;
  style?: any;
}
export const dummyData: DummyData[] = [
  {
    id: 1,
    contactMeta: {
      name: 'Kathleen Mueller',
      link: 'www.google.com',
      avatarColor: 'indigo06',
    },
    channelMeta: {
      name: 'Kata.ai',
      icon: 'wa',
    },
    receivedAt: 'Today, 12:00',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: 'Unassigned',
      variant: 'critical',
    },
  },
  {
    id: 2,
    contactMeta: {
      name: 'Yolanda Wolfe',
      link: 'www.facebook.com',
      avatarColor: 'green07',
    },
    channelMeta: {
      name: 'Kata.ai',
      icon: 'wa',
    },
    receivedAt: 'Today, 12:00',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: 'Unassigned',
      variant: 'critical',
    },
  },
  {
    id: 3,
    contactMeta: {
      name: 'Derek Anderson',
      link: 'www.instagram.com',
      avatarColor: 'red07',
    },
    channelMeta: {
      name: 'Kata.ai',
      icon: 'wa',
    },
    receivedAt: 'Today, 12:00',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: 'Unassigned',
      variant: 'critical',
    },
  },
  {
    id: 4,
    contactMeta: {
      name: 'Jessica',
      link: 'www.pinterest.com',
      avatarColor: 'blue07',
    },
    channelMeta: {
      name: '@Katadotai',
      icon: 'ig',
    },
    receivedAt: 'Today, 12:00',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: 'Pending',
      variant: 'warning',
    },
    agentMeta: { disabled: false, agents: ['Destriana'] },
  },
  {
    id: 5,
    contactMeta: {
      name: 'Harold Stevens',
      link: 'www.reddit.com',
      avatarColor: 'red07',
    },
    channelMeta: {
      name: '@Katadotai',
      icon: 'ig',
    },
    receivedAt: 'Today, 12:00',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: '10 new replies',
      variant: 'active',
    },
    agentMeta: { disabled: false, agents: ['Destriana'] },
  },
  {
    id: 6,
    contactMeta: {
      name: 'Jacqueline Zimmerman',
      link: 'www.kata.ai',
      avatarColor: 'red07',
    },
    channelMeta: {
      name: '@Katadotai',
      icon: 'ig',
    },
    receivedAt: '20 June 2020, 14:20',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: 'Replied',
      variant: 'default',
    },
    agentMeta: { disabled: false, agents: ['Destriana'] },
  },
  {
    id: 7,
    contactMeta: {
      name: 'Tamara Obrien',
      link: 'www.youtube.com',
      avatarColor: 'red07',
    },
    channelMeta: {
      name: '@botjanjan',
      icon: 'ig',
    },
    receivedAt: '20 June 2020, 14:20',
    lastUpdatedAt: 'Today, 16:20',
    statusMeta: {
      name: 'Replied',
      variant: 'default',
    },
    agentMeta: { disabled: false, agents: ['(You)'] },
  },
  {
    id: 8,
    contactMeta: {
      name: 'Minnie Ford',
      link: 'baidu.com',
      avatarColor: 'red07',
    },
    channelMeta: {
      name: '@botjanjan',
      icon: 'ig',
    },
    receivedAt: '20 June 2020, 14:20',
    lastUpdatedAt: '20 June 2020, 16:20',
    statusMeta: {
      name: 'Closed',
      variant: 'success',
    },
    agentMeta: { disabled: true, agents: ['Emje'] },
  },
  {
    id: 9,
    contactMeta: {
      name: 'Lisa Morrison',
      link: 'www.megasync.com',
      avatarColor: 'green07',
    },
    channelMeta: {
      name: '@botjanjan',
      icon: 'ig',
    },
    receivedAt: '20 June 2020, 14:20',
    lastUpdatedAt: '20 June 2020, 16:20',
    statusMeta: {
      name: 'Closed',
      variant: 'success',
    },
    agentMeta: { disabled: true, agents: ['Amanda'] },
  },
  {
    id: 10,
    contactMeta: {
      name: 'Jacob Fox',
      link: 'www.dropbox.com',
      avatarColor: 'yellow07',
    },
    channelMeta: {
      name: '@botjanjan',
      icon: 'ig',
    },
    receivedAt: '20 June 2020, 14:20',
    lastUpdatedAt: '20 June 2020, 16:20',
    statusMeta: {
      name: 'Closed',
      variant: 'success',
    },
    agentMeta: { disabled: true, agents: ['Tri'] },
  },
];
