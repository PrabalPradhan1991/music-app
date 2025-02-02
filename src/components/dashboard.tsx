import { Play, Download, DollarSign, Library, Music } from "lucide-react";
import { Button } from "./ui/button";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full" />
          <span className="font-semibold">MusicGPT</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Generate
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Discover
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Log in
          </Button>
          <Button>Sign up</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-4 gap-4 pb-4">
          <div className="relative group w-full h-[120px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg" />
            <div className="relative p-4 h-full flex flex-col justify-between overflow-hidden">
              <div className="font-semibold text-lg">Top 50</div>
              <div className="text-sm text-gray-300">Global</div>
              <div className="text-xs text-gray-400">3M Likes</div>
            </div>
          </div>
          <div className="relative group w-full h-[120px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-800 rounded-lg" />
            <div className="relative p-4 h-full flex flex-col justify-between overflow-hidden">
              <div className="font-semibold text-lg">Beats</div>
              <div className="text-xs text-gray-400">777K Likes</div>
            </div>
          </div>
          <div className="relative group w-full h-[120px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-800 rounded-lg" />
            <div className="relative p-4 h-full flex flex-col justify-between overflow-hidden">
              <div className="font-semibold text-lg">Jazz</div>
              <div className="text-xs text-gray-400">845K Likes</div>
            </div>
          </div>
          <div className="relative group w-full h-[120px] flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg" />
            <div className="relative p-4 h-full flex flex-col justify-between overflow-hidden">
              <div className="font-semibold text-lg">Reimagined</div>
              <div className="text-xs text-gray-400">1.4M Likes</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 overflow-hidden">
            <div className="p-2 bg-white/5 rounded-lg">
              <Play className="w-4 h-4" />
            </div>
            Worlds Best AI
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 overflow-hidden">
            <div className="p-2 bg-white/5 rounded-lg">
              <Download className="w-4 h-4" />
            </div>
            Unlimited Free Downloads
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 overflow-hidden">
            <div className="p-2 bg-white/5 rounded-lg">
              <DollarSign className="w-4 h-4" />
            </div>
            Commercial Use
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 overflow-hidden">
            <div className="p-2 bg-white/5 rounded-lg">
              <Library className="w-4 h-4" />
            </div>
            Biggest Library
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400 overflow-hidden">
            <div className="p-2 bg-white/5 rounded-lg">
              <Music className="w-4 h-4" />
            </div>
            Songs, Beats, Instrumentals and more
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-semibold mb-2">Global Top 15</h2>
          <div className="text-sm text-gray-400 mb-4">
            Songs created using MusicGPT
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-lg group"
              >
                <div className="text-gray-500 w-6">{i + 1}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-900 to-blue-800 rounded" />
                <div className="flex-1">
                  <div className="font-medium">Balenciaga</div>
                  <div className="text-sm text-gray-400">
                    @username · 13M Plays
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-semibold mb-2">Top Producers</h2>
          <div className="text-sm text-gray-400 mb-4">
            Most successful producers on MusicGPT
          </div>
          <div className="grid grid-cols-5 gap-6 pb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-center space-y-2 flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-900 to-blue-800 rounded-full" />
                  <div className="font-medium">Drake</div>
                  <div className="text-sm text-gray-400">13M Followers</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-20 py-8 text-center text-sm text-gray-400 space-y-4">
        <div className="flex justify-center items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full" />
          Made with MusicGPTs AI Technology
        </div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-white">
            How it works
          </a>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-white">
            About
          </a>
          <a href="#" className="hover:text-white">
            API
          </a>
          <a href="#" className="hover:text-white">
            Terms & Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
