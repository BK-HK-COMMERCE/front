import React, { useState } from 'react';
import styled from '@emotion/styled';
import useGetToken from '../../hooks/useGetToken';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 40px;
`;

const EmailInput = styled.input`
  width: 500px;
  height: 25px;
`;

const Password = styled.input`
  width: 500px;
  height: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const LoginButton = styled.button`
  width: 100px;
`;

const RegisterButton = styled.button`
  width: 100px;
`;

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { mutate: userLogin } = useGetToken();
  return (
    <Container>
      <InputWrapper>
        <EmailInput
          placeholder="email"
          type="text"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Password
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <LoginButton onClick={() => userLogin({ user_id: email, password })}>
          로그인
        </LoginButton>
        <RegisterButton>회원가입</RegisterButton>
      </ButtonWrapper>
    </Container>
  );
}
