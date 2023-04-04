export const getAssetUrl = (appId?: string, asset?: string) => {
	if (!asset && appId) return `https://dcdn.dstn.to/app-icons/${appId}`;
	if (asset && asset.startsWith("mp:external")) return `https://media.discordapp.net/${asset.replace("mp:", "")}`;
	if (asset) return `${import.meta.env.VITE_DISCORD_CDN}/${appId}/${asset}.webp`;

	return undefined;
};
