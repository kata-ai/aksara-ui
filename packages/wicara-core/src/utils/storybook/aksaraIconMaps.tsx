/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as React from 'react';
import {
  IconBot,
  IconBotFlows,
  IconModule,
  IconModuleLibrary,
  IconModuleTick,
  IconAPI,
  IconCMS,
  IconCommand,
  IconDeploy,
  IconEnvironments,
  IconNLU,
  IconData,
  IconOrganism,
  IconSingle,
  IconChartGraph,
  IconChartPie,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowDownRounded,
  IconArrowLeftRounded,
  IconArrowRightRounded,
  IconArrowUpRounded,
  IconCalendar,
  IconCalendarAdd,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronDownFilled,
  IconChevronLeftFilled,
  IconChevronRightFilled,
  IconChevronUpFilled,
  IconChevronDownRounded,
  IconChevronLeftRounded,
  IconChevronRightRounded,
  IconChevronUpRounded,
} from '../../../../aksara-icons';

interface IconMap {
  name: string;
  children: React.ReactNode;
}

type IconMapObject = Record<string, IconMap[]>;

const aksaraIconMaps: IconMapObject = {
  ai: [
    { name: 'IconBot', children: <IconBot /> },
    { name: 'IconBotFlows', children: <IconBotFlows /> },
    { name: 'IconModule', children: <IconModule /> },
    { name: 'IconModuleLibrary', children: <IconModuleLibrary /> },
    { name: 'IconModuleTick', children: <IconModuleTick /> },
    { name: 'IconAPI', children: <IconAPI /> },
    { name: 'IconCMS', children: <IconCMS /> },
    { name: 'IconCommand', children: <IconCommand /> },
    { name: 'IconDeploy', children: <IconDeploy /> },
    { name: 'IconEnvironments', children: <IconEnvironments /> },
    { name: 'IconNLU', children: <IconNLU /> },
  ],
  atoms: [
    { name: 'IconData', children: <IconData /> },
    { name: 'IconOrganism', children: <IconOrganism /> },
    { name: 'IconSingle', children: <IconSingle /> },
  ],
  basic: [
    { name: 'IconArrowDown', children: <IconArrowDown /> },
    { name: 'IconArrowLeft', children: <IconArrowLeft /> },
    { name: 'IconArrowRight', children: <IconArrowRight /> },
    { name: 'IconArrowUp', children: <IconArrowUp /> },
    { name: 'IconArrowDownRounded', children: <IconArrowDownRounded /> },
    { name: 'IconArrowLeftRounded', children: <IconArrowLeftRounded /> },
    { name: 'IconArrowRightRounded', children: <IconArrowRightRounded /> },
    { name: 'IconArrowUpRounded', children: <IconArrowUpRounded /> },
    { name: 'IconCalendar', children: <IconCalendar /> },
    { name: 'IconCalendarAdd', children: <IconCalendarAdd /> },
    { name: 'IconChevronDown', children: <IconChevronDown /> },
    { name: 'IconChevronLeft', children: <IconChevronLeft /> },
    { name: 'IconChevronRight', children: <IconChevronRight /> },
    { name: 'IconChevronUp', children: <IconChevronUp /> },
    { name: 'IconChevronDownFilled', children: <IconChevronDownFilled /> },
    { name: 'IconChevronLeftFilled', children: <IconChevronLeftFilled /> },
    { name: 'IconChevronRightFilled', children: <IconChevronRightFilled /> },
    { name: 'IconChevronUpFilled', children: <IconChevronUpFilled /> },
    { name: 'IconChevronDownRounded', children: <IconChevronDownRounded /> },
    { name: 'IconChevronLeftRounded', children: <IconChevronLeftRounded /> },
    { name: 'IconChevronRightRounded', children: <IconChevronRightRounded /> },
    { name: 'IconChevronUpRounded', children: <IconChevronUpRounded /> },
  ],
  chart: [
    { name: 'IconChartGraph', children: <IconChartGraph /> },
    { name: 'IconChartPie', children: <IconChartPie /> },
  ],
};

export default aksaraIconMaps;
