import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StAppContainer,
  StWelcomeMsg,
  StLinkSignUp,
  StLink,
} from './StyledLogin';
import Button from '../../components/atom/Button';
import Input from '../../components/atom/Input';
import { StMainContainer } from '../../components/atom/Container';
import { useInput } from '@/hooks';

const Login = () => {
  const [email, handelrEmail] = useInput('');
  const [password, handelrPassword] = useInput('');
  const navigate = useNavigate();
  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      navigate('/service/friend');
    },
    [navigate]
  );

  return (
    <StAppContainer>
      <StMainContainer width="55%">
        <StWelcomeMsg>
          <h2>환영합니다!</h2>
          <p>this.chode 에서 친구 혹은 지인들과 재미있는 일상을 보내세요!</p>
        </StWelcomeMsg>
        <form onSubmit={onSubmitHandler}>
          <Input
            id="email"
            type="text"
            label="이메일"
            placeholder="아이디를 입력하세요"
            value={email}
            onChange={handelrEmail}
          />
          <Input
            id="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={handelrPassword}
          />
          <Button type="submit">로그인</Button>
        </form>
        <StLinkSignUp>
          계정이 필요한가요? <StLink to="/register">가입하기!</StLink>
        </StLinkSignUp>
      </StMainContainer>
    </StAppContainer>
  );
};

export default Login;
