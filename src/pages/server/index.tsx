import { useParams } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import Chat from '@/components/chat';
import * as St from './server.module.ts';

const Server = () => {
  // 추후 삭제 예정
  const mock = [
    {
      user: 'a',
      text: '안녕하세요.',
      timestamp: '2023-11-22 10:00:00',
      isMine: true,
    },
    {
      user: 'b',
      text: '반갑습니다.',
      timestamp: '2023-11-22 10:05:00',
      isMine: false,
    },
  ];
  const param = useParams();
  return (
    <>
      <St.ServerWrap>
        <St.ServerTop>
          <button>
            <p>{param.name}</p>
            <BiChevronDown />
          </button>
        </St.ServerTop>
      </St.ServerWrap>
      <St.ChatWrap>
        <St.ChatTop>
          <p>@일반</p>
        </St.ChatTop>
        <Chat data={mock} name="11" />
      </St.ChatWrap>
    </>
  );
};

export default Server;
