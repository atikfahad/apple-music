import { Playlist } from "@prisma/client";
import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
    const { data, error } = useSWR('/me', fetcher)
    return {
        user: data,
        isLoading: !data && !error,
        isError: error,
    }
}
// basically whats happening here is directly calling api we are using custom hooks where we have used some cacheing strategy

export const usePlaylist = () => {
    const { data, error } = useSWR('/playlist', fetcher)
    return {
        playlists: data || [],
        isLoading: !data && !error,
        isError: error
    }
}
