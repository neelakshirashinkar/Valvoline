import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import ValvolineLogo from '../Valvoline.png';
import '../App.css';

const User = () => {
    const { id } = useParams(); 
    const [userData, setUserData] = useState(null); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${id}`); 
                // console.log('User data response:', response.data);
                setUserData(response.data.user); 
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data. Please try again.');
            }
        };

        fetchUser(); 
    }, []); 

    if (error) {
        return (
            <Container>
                <Typography variant="h3" color="error">{error}</Typography>
            </Container>
        );
    }

    if (!userData) {
        return (
            <Container>
                <Typography variant="h3">Loading...</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <img src={ValvolineLogo} alt="Valvoline Logo" className="logo" />
            <Typography variant="h3" gutterBottom>User Details</Typography>
<Typography variant="h5">Name: {userData.name}</Typography>
<Typography variant="body1">Address: {userData.address}</Typography>
<Typography variant="body1">City: {userData.city}</Typography>
<Typography variant="body1">State: {userData.state}</Typography>
<Typography variant="body1">Zip: {userData.zip}</Typography>
<Typography variant="body1">Phone: {userData.phone}</Typography>
<Typography variant="body1">Cell: {userData.cell}</Typography>
<Typography variant="body1">Email: {userData.email}</Typography>
<Typography variant="body1">Service Requested:</Typography>
<ul>
    {userData.serviceRequested.map((service, index) => (
        <li key={index}>{service}</li>
    ))}
</ul>
<Typography variant="body1">Driveability:</Typography>
<ul>
    {userData.driveability.map((drive, index) => (
        <li key={index}>{drive}</li>
    ))}
</ul>
<Typography variant="body1">Other Concern: {userData.otherConcern}</Typography>
<Typography variant="body1">Agreed to Terms: {userData.agreedToTerms.toString()}</Typography>
<Typography variant="body1">Date: {userData.date}</Typography>

            
        </Container>
    );
};

export default User;
