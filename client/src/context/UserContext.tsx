import { createContext } from "react";
import { ContextProps, userContextType } from "../type";

export const UserContext = createContext<userContextType | null>(null);

const UserProvider: React.FC<ContextProps> = ({ children }) => {
    const user: any = {
        nama: "Admin",
    };
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserProvider;
