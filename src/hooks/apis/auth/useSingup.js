import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/API/auth';

export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutate: signUpMutation
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log('Sucessfully singed up', data);
    },
    onError: (error) => {
      console.error('falied to sign up', error);
    }
  });

  return {
    isPending,
    isSuccess,
    error,
    signUpMutation
  };
};
