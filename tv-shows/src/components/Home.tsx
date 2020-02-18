import React from "react";
import { TileList } from './../components/tile-list/TileList';
import { ChangeEvent } from 'react';
import { TVShowsFetcher } from './../data/TVShowsFetcher';
import { TVShowData } from "./../data/TVShowData";
import Header from "./header/Header";

export const Home: React.FC = () => {

    const [query, setQuery] = React.useState<string>("");
    const [shows, setShows] = React.useState<TVShowData[]>([]);

    const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const q = event.target.value;
        setQuery(q);
        const items = await TVShowsFetcher.getInstance().getShows(q);
        setShows(items);
    }

    return (
        <div className="App">
            <Header q={query} handleSearchChange={handleSearchChange} />
            <TileList shows={shows} />
        </div>
    );
}