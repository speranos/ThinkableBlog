import jwt from 'jsonwebtoken';


const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const session = await getSession();
        if (!session) {
          router.replace('/login');
        } else {
          setLoading(false);
        }
      };
      checkAuth();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
