import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

import { Book } from "@/types/book";

interface BookContextType {
    books: Book[];
    setBooks: Dispatch<SetStateAction<Book[]>>;
}

export const BookContext = createContext({} as BookContextType);

interface BookProviderProps {
    children: ReactNode;
}


export function BookProvider({ children }: BookProviderProps) {
    const [books, setBooks] = useState<Book[]>([]);

    return(
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    )
}

export const useBook = () => useContext<BookContextType>(BookContext)