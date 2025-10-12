import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Loader, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, isAuthenticated, isLoading, error } = useAuthStore();
  const [signing, setSigning] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleGoogleSignIn = async () => {
    setSigning(true);
    const result = await signInWithGoogle();

    if (result.success) {
      navigate('/');
    } else {
      setSigning(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl mb-3">🌸</h1>
          <h2 className="text-3xl font-bold text-primary mb-2">Welcome to Sakhee</h2>
          <p className="text-muted">Your AI companion for PCOS management</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Sign in to continue</h3>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-danger bg-opacity-10 border-l-4 border-danger rounded flex items-start gap-3">
              <AlertCircle className="text-danger flex-shrink-0" size={20} />
              <p className="text-sm text-danger">{error}</p>
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={signing}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-surface rounded-lg hover:bg-surface transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {signing ? (
              <>
                <Loader className="animate-spin" size={20} />
                <span className="font-medium">Signing in...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-medium">Continue with Google</span>
              </>
            )}
          </button>

          {/* Privacy Notice */}
          <p className="mt-6 text-xs text-center text-muted">
            By signing in, you agree to our Terms of Service and Privacy Policy. Your health data is
            encrypted and private.
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-1">🤖</div>
            <p className="text-xs text-muted">AI-Powered</p>
          </div>
          <div>
            <div className="text-2xl mb-1">🔒</div>
            <p className="text-xs text-muted">Secure</p>
          </div>
          <div>
            <div className="text-2xl mb-1">💜</div>
            <p className="text-xs text-muted">Supportive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
