import { Cpu, Wifi, Activity, Box, Terminal } from 'lucide-react';
import { UserMenu } from './Menu/UserMenu';
import { QuickActions } from './Menu/QuickActions';

export function Interface() {
  return (
    <div className="fixed inset-0">
      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
        <div className="flex items-center space-x-4">
          <div className="bg-black/20 backdrop-blur-md rounded-lg p-3 border border-emerald-500/20">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-mono font-bold">ODEON OS v1.0</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-md rounded-lg px-4 py-2">
            <Cpu className="w-4 h-4 text-white/80" />
            <Wifi className="w-4 h-4 text-white/80" />
            <Activity className="w-4 h-4 text-white/80" />
          </div>
        </div>
        <UserMenu />
      </div>

      {/* Quick Action Buttons */}
      <QuickActions />

      {/* Bottom HUD */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-2xl mx-auto bg-black/20 backdrop-blur-md rounded-lg p-4 border border-emerald-500/20">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <div className="font-mono font-bold text-emerald-400">ODEON OS</div>
              <div className="text-white/60">Quantum Core Active</div>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}