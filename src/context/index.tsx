'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useSession } from "next-auth/react";
import Spinner from "@/app/components/spinner";
import { Blog, BlogFormData } from "@/utils/types";
import { initialBlogFormData } from "@/utils";
import { usePathname, useRouter } from "next/navigation";

type ContextType = {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    formData: BlogFormData,
    setFormData: Dispatch<SetStateAction<BlogFormData>>,
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>,
    searchResults: Blog[],
    setSearchResults: Dispatch<SetStateAction<Blog[]>>,
}

const initialState = {
    loading: false,
    setLoading: () => { },
    formData: initialBlogFormData,
    setFormData: () => { },
    searchQuery: '',
    setSearchQuery: () => { },
    searchResults: [],
    setSearchResults: () => { },
}

export const GlobalContext = createContext<ContextType>(initialState)

export default function GlobalState({ children }: { children: ReactNode }): void | JSX.Element {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialBlogFormData);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Blog[]>([]);
    const { data: session } = useSession();
    const pathName = usePathname(); 
    const router = useRouter(); 

    if (session === undefined) return <Spinner />; 

    if(session === null && pathName === '/create') return router.push('/');

    return <GlobalContext.Provider 
    value={{ loading, setLoading, formData, setFormData, searchQuery, setSearchQuery, searchResults, setSearchResults }}>
        {children}
    </GlobalContext.Provider>
}

