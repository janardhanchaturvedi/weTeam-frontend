import { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const SignupCard = () => {
  const [singupForm, setSignupForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign Up to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Input
            placeholder="Email"
            required
            onChange={(e) =>
              setSignupForm({
                ...singupForm,
                email: e.target.value
              })
            }
            value={singupForm.email}
            disable={false}
          />
        </form>
      </CardContent>
    </Card>
  );
};
