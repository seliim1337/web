import { LanyardUser } from '../types/lanyard';
import { AboutCard } from './card/AboutCard';
import { CustomCard } from './activity/CustomCard';
import { GameCard } from './activity/GameCard';
import { SpotifyCard } from './activity/SpotifyCard';
import { Avatar } from './Avatar';
import { BadgesCard } from './card/BadgesCard';
import { NoteCard } from './card/NoteCard';
import { DatesCard } from './card/DatesCard';
import { ConnectionsCard } from './card/ConnectionsCard';

interface CardProps {
  data: LanyardUser;
}

export function ProfileCard({ data }: CardProps) {
  const game = data.activities.find(x => x.type === 0);
  const custom = data.activities.find(x => x.type === 4);

  return (
    <div className="w-[300px] text-slate-200 drop-shadow-xl">
      <div className="rounded-2xl overflow-hidden bg-zinc-900">
        <div className="relative">
          {/* Banner */}
          <picture>
            <source type="image/webp" srcSet="/images/banner.webp" />
            <source type="image/png" srcSet="/images/banner.png" />
            <img src="/images/banner.webp" alt="banner" width="300" height="120" aria-hidden="true" draggable="false" className="block select-none" />
          </picture>

          {/* Avatar */}
          <div className="absolute top-[75px] left-[13px]">
            <div className="rounded-full select-none">
              <Avatar data={data} />
            </div>
          </div>

          {/* Username */}
          <div className="pt-14 pb-3 px-4">
            <div className="text-xl font-semibold leading-6">
              <h1 className='absolute top-[160px] left-[16px] text-slate-50'>selim</h1>
              <span className="text-sm">{data.discord_user.username}</span>
              {/*<span className="text-slate-300">#{data.discord_user.discriminator}</span>*/}
            </div>
          </div>

          {/* Badges */}
          <BadgesCard />

          <div className="px-4 pb-3.5 flex-initial text-sm">
            {/* Custom Activity */}
            {custom && (
              <div className="pb-2.5">
                <CustomCard activity={custom} />
              </div>
            )}

            <div className="w-full h-[2px] bg-zinc-800 mb-3" />

            {/* About me */}
            <AboutCard />

            {/* Member Since */}
            <DatesCard />

            {/* Activities */}
            {game && <GameCard activity={game} />}
            {data.spotify && !game && <SpotifyCard spotify={data.spotify} />}

            {/* Note Card 
            <div className="mb-3 select-none">
              <h2 className="font-bold text-xs text-slate-300 leading-4 mb-1 uppercase">Note</h2>
              <NoteCard />
            </div>

            {/* Connections 
            <div className="mb-3">
              <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase select-none">Connections</h2>
              <ConnectionsCard />
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
