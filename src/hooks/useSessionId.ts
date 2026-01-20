import { useEffect, useState } from 'react';

const SESSION_ID_KEY = 'chat_session_id';

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function useSessionId() {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    let id = localStorage.getItem(SESSION_ID_KEY);
    
    if (!id) {
      id = generateUUID();
      localStorage.setItem(SESSION_ID_KEY, id);
    }
    
    setSessionId(id);
  }, []);

  return sessionId;
}
