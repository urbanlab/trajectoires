import BicycleIcon from '@Commons/svg/mobility-bicycle.svg';
import BusIcon from '@Commons/svg/mobility-bus.svg';
import CarIcon from '@Commons/svg/mobility-car.svg';
import WalkIcon from '@Commons/svg/mobility-walk.svg';

export const chartDefMobility: Record<
  string,
  {
    color: string;
    svg: string;
  }
> = {
  'A pieds': {
    color: '#8884d8',
    svg: WalkIcon,
  },
  'Transport en commun': {
    color: '#82ca9d',
    svg: BusIcon,
  },
  Voiture: {
    color: '#d2a67f',
    svg: CarIcon,
  },
  Vélo: {
    color: '#c86a6a',
    svg: BicycleIcon,
  },
};

export const chartDefAverage: Record<string, string> = {
  '0': '#c86a6a',
  '1': '#d2a67f',
  '2': '#c1ce4fff',
  '3': '#6ac88eff',
  '4': '#8884d8',
  '5': '#3c7bdaff',
};
