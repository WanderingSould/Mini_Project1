import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PageSpinner } from './ui/spinner';

export function RouteTransition() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return <PageSpinner />;
}
