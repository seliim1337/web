export const getAssetUrl = (appId?: string, asset?: string) => {
        if (!asset && appId) return  `https://dcdn.dstn.to/app-icons/${appId}`;
        if (asset?.startsWith("mp:external")) return `https://media.discordapp.net/${asset.replace("mp:", "")}`;
        if (asset) return `https://cdn.discordapp.com/app-assets/${appId}/${asset}.webp`;

	return undefined;
};
