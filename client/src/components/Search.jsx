import React, { useState } from 'react';
import ValvolineLogo from '../Valvoline.png';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { TextField, Button, Typography, Container, Grid, MenuItem } from '@mui/material';
import '../App.css';

const Search = () => {
    const [searchType, setSearchType] = useState('name');
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/search?type=${searchType}&value=${searchValue}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        setSearchResults([]);
    };

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        searchUsers();
    };

    return (
        <Container maxWidth="sm">
            <img src={ValvolineLogo} alt="Valvoline Logo" className="logo" />
            <Typography variant="h3" align="center" gutterBottom>
                User Search
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        select
                        label="Search By"
                        value={searchType}
                        onChange={handleSearchTypeChange}
                        fullWidth
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="phone">Phone Number</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={`Enter ${searchType.charAt(0).toUpperCase() + searchType.slice(1)} to search`}
                        value={searchValue}
                        onChange={handleSearchValueChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <Typography variant="h5" gutterBottom>
                        Search Results
                    </Typography>
                    <ul>
                        {searchResults.map((user) => (
                            <li key={user._id}>
                                
                                <Link to={`/user/${user._id}`}>
                                    Name: {user.name}, Phone: {user.phone}, Email: {user.email}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
};

export default Search;
