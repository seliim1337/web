export function NoteCard() {
  return (
    <div className="-mx-1 w-full h-9 p-1 text-xs">
      Website made with{' '}
      <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank" className="hover:underline underline-offset-2">
        React
      </a>{' '}
      and{' '}
      <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank" className="hover:underline underline-offset-2">
        TailwindCSS
      </a>
      .{' \n '} Inspired on{' '}
      <a href="https://niskii.dev" rel="noopener noreferrer" target="_blank" className="hover:underline underline-offset-2">
        Niskii's Website
      </a>
    </div>
  );
}
