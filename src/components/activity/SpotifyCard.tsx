import { useTime } from '../../hooks/useTime';
import { Spotify } from '../../types/lanyard';
import { Spotify as SpotifyIcon } from '../icons/Spotify';
import { SpotifyWhiteIcon } from '../icons/SpotifyWhiteIcon';
import { ProgressBar } from '../ProgressBar';
import './tooltip.css';
import { Tooltip } from 'react-tooltip';

interface CardProps {
  spotify: Spotify;
}

export function SpotifyCard({ spotify }: CardProps) {
  const time = useTime(spotify.timestamps, true);

  return (
    <div className="mb-3">
      <div className="justify-between flex flex-row items-center select-none">
        <div className="text-center">
          <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">Listening to Spotify</h2>
        </div>
        <SpotifyIcon />
      </div>

      {/* Image */}
      <div className="items-center flex flex-auto">
        <div className="relative self-start">
        <a
            href={`${import.meta.env.VITE_SPOTIFY_URL}/track/${spotify.track_id}`}
            rel="noopener noreferrer"
            target="_blank"
          >
          <Tooltip id="spotify-tooltip" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#fff" }} className="select-none" />
          <img data-tooltip-id="spotify-tooltip" data-tooltip-content={spotify.album} src={spotify.album_art_url} alt={spotify.album} width="70" height="70" className="select-none" />
          </a>{' '}
        </div>

        <div className="flex-auto overflow-hidden ml-2.5 text-normal">
          <a
            href={`${import.meta.env.VITE_SPOTIFY_URL}/track/${spotify.track_id}`}
            rel="noopener noreferrer"
            target="_blank"
            className="
            block whitespace-nowrap text-ellipsis overflow-hidden text-sm font-semibold hover:underline underline-offset-2 text-slate-300 select-none"
          >
            {spotify.song}
          </a>
          <div className="text-slate-300 block select-none">by {spotify.artist.replaceAll('; ', ', ')}</div>
          <div className="text-slate-300 block whitespace-nowrap text-ellipsis overflow-hidden select-none">on {spotify.album}</div>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-3">
        {spotify.timestamps && (
          <div>
            <ProgressBar time={time} />
            <div className="flex flex-row items-center gap-3 justify-between">
              {time && time.start && <span className="text-xs font-normal select-none">{time.start}</span>}
              {time && time.end && <span className="text-xs font-normal select-none">{time.end}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="mt-1">
        <div className="flex mt-3 flex-col flex-wrap justify-center items-stretch select-none">
          <a href={`${import.meta.env.VITE_SPOTIFY_URL}/track/${spotify.track_id}`} rel="noopener noreferrer" target="_blank">
            <button className="h-8 text-sm w-full space-x-2 relative flex items-center justify-center text-white bg-zinc-600 hover:bg-zinc-500 rounded transition-colors">
              <SpotifyWhiteIcon />
              <div className="block whitespace-nowrap text-ellipsis overflow-hidden">Play on Spotify</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
