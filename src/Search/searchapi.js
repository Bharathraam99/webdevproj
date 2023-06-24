import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import NavigationSidebar from "../nav/index.js";
import {AiOutlineSearch} from "react-icons/ai";
import Feed from "../Feed/feed";
import "../Feed/feeds.css";
import axios from "axios";

const api = axios.create();

const SearchApi = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [details, setDetails] = useState(null);

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            const query = e.target.value;
            setSearchQuery(query);
            performSearch(query);
        }
    };

    const performSearch = async (query) => {
        // Perform search logic here and update the search results state
        let results = []; // Replace with actual search logic
        const response = await api.get(`https://api.api-ninjas.com/v1/exercises?type=${query}`, {
            headers: {
                'X-Api-Key': 'qs5WVpBDq5Hm1QxE7W8qnQ==neepvZyKo05PG6Sb'
            }
        });
        results = response.data;
        setSearchResults(results);
        setDetails(null);
    };

    const handleDetails = async (name) => {
        console.log(name);
        const response = await api.get(`https://api.api-ninjas.com/v1/exercises?name=${name}`, {
            headers: {
                'X-Api-Key': 'qs5WVpBDq5Hm1QxE7W8qnQ==neepvZyKo05PG6Sb'
            }
        });
        setDetails(response.data);
        setSearchResults([]);
    }

    return (
        <>
            <div style={{backgroundColor: "#8AC7DB"}}>
                <Feed/>
            </div>
            <div className="row">
                <div className="col-2 wd-nav">
                    <NavigationSidebar/>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <p>Allowed Types: (Cardio, olympic_weightlifting, plyometrics, powerlifting,
                        strength, stretching, strongman)</p>
                    <div className="col-12 col-md-11 position-relative">
                        <input
                            placeholder="Search Workouts By Type"
                            className="form-control rounded-pill pe-5 ps-5 search-input"
                            onKeyDown={handleSearch}
                        />
                        <AiOutlineSearch className="fs-3 position-absolute wd-nudge-upp"/>
                    </div>
                    {searchQuery && (
                        <div>
                            &nbsp;   &nbsp;
                            <h4>Search Results for "{searchQuery}":</h4>
                            {/* Render the search query */}
                            &nbsp;
                            {/* Render the search results */}
                            {searchResults.length > 0 ? (
                                <ul>
                                    {searchResults.map((result) => (
                                        <li key={result.name}><div style={{"border":"1px solid black"}}
                                            onClick={() => handleDetails(result.name)}>{result.name}</div></li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                    )}
                    {
                        details && <ul>{details.map((detail)=><li>{JSON.stringify(detail)}</li>)}</ul>
                    }
                </div>
            </div>
        </>
    );
};

export default SearchApi;
