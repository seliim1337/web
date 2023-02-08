import { LanyardUser } from '../types/lanyard';

const statusClasses = {
  online: 'fill-green-600',
  idle: 'fill-amber-400',
  dnd: 'fill-red-500',
  offline: 'fill-slate-500',
};

interface Props {
  data: LanyardUser;
}

export function StatusMask({ data }: Props) {
  if (!data) return <circle cx="68" cy="68" r="8" className={statusClasses[data.discord_status]} mask="url(#svg-mask-status-offline)" />;

  switch (data.discord_status) {
    case 'online':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.discord_status]} />;
    case 'idle':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.discord_status]} mask="url(#svg-mask-status-idle)" />;
    case 'dnd':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.discord_status]} mask="url(#svg-mask-status-dnd)" />;
    case 'offline':
      return <circle cx="68" cy="68" r="8" className={statusClasses[data.discord_status]} mask="url(#svg-mask-status-offline)" />;
  }
}
