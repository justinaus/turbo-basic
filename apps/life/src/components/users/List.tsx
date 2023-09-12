import { useSuspenseQuery } from '@suspensive/react-query';

type User = {
  email: string;
  id: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export default function List() {
  const { data } = useSuspenseQuery<User[]>({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json(),
      ),
  });

  return (
    <ul
      css={{
        // emotion을 사용하는 구성 요소 인스턴스의 수를 줄이세요. 구성 요소 인스턴스 각각에 대해 소량의 작업을 해야 한다. 더 성능이 뛰어난 접근 방식은 CSS 선택기를 사용하여 동일한 CSS 조각으로 10,000개의 요소 각각을 대상으로 하는 단일 부모 요소에 css prop을 사용하는 것입니다.
        li: {
          color: 'red',
        },
      }}
    >
      {data.map((user) => (
        <li key={user.id}>
          {user.id} - {user.name}
        </li>
      ))}
    </ul>
  );
}
