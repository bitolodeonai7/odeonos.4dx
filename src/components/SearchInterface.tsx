import { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';

export function SearchInterface() {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
      <form 
        onSubmit={handleSearch}
        className={`transition-all duration-300 ${
          isExpanded ? 'bg-black/20' : 'bg-black/10'
        } backdrop-blur-md rounded-lg overflow-hidden border border-emerald-500/20`}
      >
        <div className="flex items-center p-2">
          <Search 
            className={`w-5 h-5 ${
              isExpanded ? 'text-emerald-400' : 'text-white/60'
            } transition-colors duration-300`}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="ODEON OS Search..."
            className="w-full bg-transparent border-none outline-none px-3 py-2 text-white placeholder-white/50 font-mono"
          />
          {isExpanded && query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          )}
          {isExpanded && (
            <button
              type="submit"
              className="ml-2 p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-colors group"
            >
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
        {isExpanded && (
          <div className="px-4 py-2 border-t border-emerald-500/20">
            <div className="flex items-center justify-between text-xs text-white/40 font-mono">
              <span>Press Enter to search ODEON network</span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="hover:text-emerald-400 transition-colors"
              >
                ESC to close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}