import { useParams } from 'react-router-dom';
import { useHunterManagement } from './hook';

export function HunterManagement() {
  const { hunterId } = useParams();

  const { hunter, isHunterLoading } = useHunterManagement({
    hunterId: hunterId as string,
  });
  console.log(hunter);

  return <div>{hunter?.name}</div>;
}
