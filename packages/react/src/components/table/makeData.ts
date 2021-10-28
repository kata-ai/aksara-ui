export interface DummyData {
  [key: string]: string | number;
  id: number;
  age: number;
  visits: number;
  progress: number;
  status: string;
}

const newPerson = (): DummyData => {
  const statusChance = Math.random();
  let status = '';
  if (statusChance > 0.66) {
    status = 'relationship';
  } else if (statusChance > 0.33) {
    status = 'complicated';
  } else {
    status = 'single';
  }
  return {
    id: Math.random(),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function makeData(lens: number) {
  const arrays = [...Array(lens)];
  return arrays.map(() => {
    return {
      ...newPerson(),
    };
  });
}
