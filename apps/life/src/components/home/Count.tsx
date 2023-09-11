import { useRecoilValue } from 'recoil';
import { CountState } from './countState';

export default function Count() {
  const count = useRecoilValue(CountState);

  return <div>Count: {count}</div>;
}
