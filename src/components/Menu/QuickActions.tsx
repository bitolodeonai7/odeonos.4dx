import { 
  Terminal, 
  Database, 
  Shield, 
  Network, 
  Cpu,
  Layers
} from 'lucide-react';

export function QuickActions() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 space-y-3">
      <ActionButton icon={Terminal} label="Terminal" />
      <ActionButton icon={Database} label="Database" />
      <ActionButton icon={Shield} label="Security" />
      <ActionButton icon={Network} label="Network" />
      <ActionButton icon={Cpu} label="System" />
      <ActionButton icon={Layers} label="Projects" />
    </div>
  );
}

function ActionButton({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="group relative">
      <button className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-lg border border-emerald-500/20 flex items-center justify-center hover:bg-black/30 transition-colors group-hover:border-emerald-500/40">
        <Icon className="w-6 h-6 text-emerald-400" />
      </button>
      <div className="absolute left-full ml-3 px-3 py-1 bg-black/90 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-white/80 font-mono text-sm whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
}