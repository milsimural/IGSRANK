import { createContext } from 'react';
import type { User } from './components/types/user';

interface AppContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    logoutHandler: () => void;
}

const context = createContext<AppContextType | null>(null);

export default context;
