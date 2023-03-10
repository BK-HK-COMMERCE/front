import { useQuery, useMutation } from 'react-query';

type LoginData = {
  user_id: string;
  password: string;
};

const useGetToken = () => {
  return useMutation(
    'getToken',
    async (data: LoginData) => {
      console.log(data);
      try {
        const responce = await fetch('http://13.114.144.16/auth/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        return responce.json();
      } catch (error) {
        throw error;
      }
    },
    {
      onSuccess: (data) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
      },
    }
  );
};

export default useGetToken;
