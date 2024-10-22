import { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-green-950/50 backdrop-blur-lg border border-green-700 rounded-lg shadow-xl">
        {/* Header Section */}
        <div className="p-6">
          <div className="flex justify-center space-x-4 mb-6">
            <button 
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 rounded-md transition-colors duration-200 w-24
                ${isLogin 
                  ? 'bg-green-600 text-white' 
                  : 'border border-green-600 text-green-600 hover:bg-green-600/10'
                }`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 rounded-md transition-colors duration-200 w-24 h-10
                ${!isLogin 
                  ? 'bg-green-600 text-white' 
                  : 'border border-green-600 text-green-600 hover:bg-green-600/10'
                }`}
            >
              Signup
            </button>
          </div>
          <h2 className="text-center text-2xl font-bold text-white">
            {isLogin ? "Welcome !!" : "Create Account"}
          </h2>
        </div>
        
        {/* Form Section */}
        <div className="p-6 pt-0">
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-100">
                Email
              </label>
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-green-950/30 border border-green-700 
                         text-white placeholder-green-400/50 focus:outline-none focus:ring-2 
                         focus:ring-green-600 focus:border-transparent "
              />
            </div>
            
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-green-100">
                  Username
                </label>
                <input 
                  type="text"
                  placeholder="Choose a username"
                  className="w-full px-4 py-2 rounded-md bg-green-950/30 border border-green-700 
                           text-white placeholder-green-400/50 focus:outline-none focus:ring-2 
                           focus:ring-green-600 focus:border-transparent"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-100">
                Password
              </label>
              <input 
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-green-950/30 border border-green-700 
                         text-white placeholder-green-400/50 focus:outline-none focus:ring-2 
                         focus:ring-green-600 focus:border-transparent"
              />
            </div>
            
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-green-100">
                  Confirm Password
                </label>
                <input 
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 rounded-md bg-green-950/30 border border-green-700 
                           text-white placeholder-green-400/50 focus:outline-none focus:ring-2 
                           focus:ring-green-600 focus:border-transparent"
                />
              </div>
            )}
            
            <button 
              type="submit"
              className="w-full px-4 py-2 mt-6 text-white bg-green-600 rounded-md hover:bg-green-700 
                       focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 
                       focus:ring-offset-green-950"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            
            {isLogin && (
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-green-400 hover:text-green-300">
                  Forgot your password?
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;