type InternalButtonProps = {
	text: string;
};

export default function Button({ text }: InternalButtonProps) {
	return (
		<button className="h-8 text-sm w-full relative flex items-center justify-center text-white bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-600 hover:dark:bg-zinc-500 rounded transition-colors">
			<div className="block whitespace-nowrap text-ellipsis overflow-hidden">{text}</div>
		</button>
	);
}
