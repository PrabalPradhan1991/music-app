import { MusicPlayer } from "@/components/music-player";
import Dashboard from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="text-white p-3">
      <Dashboard />
      <MusicPlayer
        className={`transform transition-all duration-500 ease-out fixed left-1/2 group -translate-x-1/2 bottom-[30px]`}
        title="R&B with uplifting vibes about neon streets"
        artist="@username"
        plays={"130M"}
        coverUrl="/cover.png"
        audioUrl="/music/music.mp3"
      />
    </div>
  );
}
