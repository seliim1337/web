import type { GatewayActivity } from 'discord-api-types/v10';

interface CardProps {
  activity: GatewayActivity;
}
// Emojilerde hata var göstermiyor
export function CustomCard({ activity }: CardProps) {
  return (
    <div className="flex flex-row">
      {activity.emoji && (
        <img
          className="w-5 h-5 -my-px mr-1 float-left"
          src={`${import.meta.env.VITE_DISCORD_CDN}/emojis/${activity.emoji.id}.${activity.emoji.animated ? 'gif' : 'webp'}?size=44`}
          aria-label={activity.emoji.name}
        />
      )}
      {activity.state && <span className="font-sans antialiased text-sm">{activity.state}</span>}
    </div>
  );
}
