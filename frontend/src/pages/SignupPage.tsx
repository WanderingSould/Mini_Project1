import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Spinner } from '../components/ui/spinner';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    // Basic validation
    const newErrors: typeof errors = {};
    if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        window.location.href = '/login';
      } else {
        const data = await response.json();
        if (data.message?.toLowerCase().includes('email')) {
          setErrors({ email: data.message });
        } else if (data.message?.toLowerCase().includes('username')) {
          setErrors({ username: data.message });
        } else {
          setErrors({ general: data.message || 'Signup failed. Please try again.' });
        }
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'An error occurred during signup.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Card className="w-full max-w-md p-8 bg-black/40 backdrop-blur-md border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Sign Up</h2>
        {errors.general && (
          <div className="mb-6 p-3 rounded bg-red-500/10 border border-red-500/50 text-red-500">
            {errors.general}
          </div>
        )}
        <form onSubmit={handleSignup}>
          <div className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-gray-200">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`mt-2 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 ${
                  errors.username ? 'border-red-500' : ''
                }`}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`mt-2 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-200">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`mt-2 bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Spinner className="mr-2" /> Signing up...
                </div>
              ) : (
                'Sign Up'
              )}
            </Button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 hover:text-purple-300">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignupPage;
