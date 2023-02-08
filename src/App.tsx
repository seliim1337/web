import { useEffect, useState } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { lanyard } from './gateway/lanyard';
import './styles/main.css';
import { LanyardUser } from './types/lanyard';

function App() {
  const [status, setStatus] = useState<LanyardUser>();

  useEffect(() => lanyard.connect(setStatus), []);

  return (
    <div className="flex mx-auto items-center justify-center h-screen w-screen">
      {status ? (
        <ProfileCard data={status} />
      ) : (
        <svg className="animate-spin" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

export default App;
