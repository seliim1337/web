import { LanyardUser } from '../types/lanyard';
import { AvatarMask, StatusDnd, StatusIdle, StatusOffline } from './masks/Masks';
import { StatusMask } from './StatusMask';

interface CardProps {
  data: LanyardUser;
}

export function Avatar({ data }: CardProps) {
  return (
    <div role="img" aria-label="avatar" aria-hidden="false" className="w-[92px] h-[92px] border-[6px] relative rounded-full border-zinc-900">
      <svg width="92" height="80" viewBox="0 0 92 80" className="absolute">
        <defs>
          <AvatarMask />
          <StatusOffline />
          <StatusDnd />
          <StatusIdle />
        </defs>
        <foreignObject x="0" y="0" width="90" height="90" mask="url(#avatar-mask)">
          <div className="grid w-full h-full">
            <picture>
              <source srcSet="/images/avatar-128.webp 1x, /images/avatar-256.webp 2x, /images/avatar-512.webp 3x" type="image/webp" />
              <source srcSet="/images/avatar-128.png 1x, /images/avatar-256.png 2x, /images/avatar-512.png 3x" type="image/png" />
              <img src="/images/avatar-128.webp" alt="avatar" width="80" height="80" aria-hidden="true" draggable="false" className="block" />
            </picture>
          </div>
        </foreignObject>

        <StatusMask data={data} />
      </svg>
    </div>
  );
}
