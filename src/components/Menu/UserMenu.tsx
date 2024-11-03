import { useState } from 'react';
import { User, Settings, LogOut, ChevronDown, Shield, Database } from 'lucide-react';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-black/20 backdrop-blur-md rounded-lg px-4 py-2 border border-emerald-500/20 hover:bg-black/30 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <User className="w-5 h-5 text-emerald-400" />
        </div>
        <span className="text-white/80 font-mono">Guest User</span>
        <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg border border-emerald-500/20 overflow-hidden">
          {isLoggedIn ? (
            <>
              <div className="p-4 border-b border-emerald-500/20">
                <div className="font-mono text-emerald-400">System Admin</div>
                <div className="text-sm text-white/60">admin@odeon.os</div>
              </div>
              <div className="p-2">
                <MenuButton icon={Shield} text="Security Settings" />
                <MenuButton icon={Database} text="Data Management" />
                <MenuButton icon={Settings} text="System Config" />
                <MenuButton 
                  icon={LogOut} 
                  text="Logout" 
                  onClick={() => setIsLoggedIn(false)}
                  className="text-red-400 hover:bg-red-500/20" 
                />
              </div>
            </>
          ) : (
            <div className="p-4 space-y-4">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-mono py-2 rounded-lg transition-colors"
              >
                Login
              </button>
              <button
                className="w-full bg-black/40 hover:bg-black/60 text-white/80 font-mono py-2 rounded-lg transition-colors"
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MenuButton({ 
  icon: Icon, 
  text, 
  onClick, 
  className = "text-white/80 hover:bg-emerald-500/20" 
}: { 
  icon: any; 
  text: string; 
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-2 transition-colors ${className}`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-mono text-sm">{text}</span>
    </button>
  );
}