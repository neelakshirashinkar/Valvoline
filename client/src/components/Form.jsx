import ValvolineLogo from '../Valvoline.png';
import { useState } from 'react';
import axios from 'axios';
import { TextField, FormControl, FormLabel, FormGroup , TextareaAutosize , Checkbox, Button, FormControlLabel, Typography, Container, Grid } from '@mui/material';
import '../App.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cell: '',
    email: '',
    serviceRequested: [],
    driveability: [],
    otherConcern: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'agreedToTerms') {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      } else {
        if (checked) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: [...prevData[name], value],
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: prevData[name].filter((item) => item !== value),
          }));
        }
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/form', formData);
      console.log('Form submitted successfully:', response.data);
      
      setFormData({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        cell: '',
        email: '',
        serviceRequested: [],
        driveability: [],
        otherConcern: '',
        agreedToTerms: false,
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <Container maxWidth="sml">
      <img src={ValvolineLogo} alt="Valvoline Logo" className="logo" />
      <Typography variant="h3" align="center" gutterBottom>
        Discount Kar Kare
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Cell"
              name="cell"
              value={formData.cell}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ fontSize: 18, fontWeight: 'bold' }}>Service Requested:</FormLabel>
              <Grid container spacing={2}>
                {/* First column */}
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CONVENTIONAL OIL" />}
                      label="CONVENTIONAL OIL"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="SEMI-SYNTHETIC OIL" />}
                      label="SEMI-SYNTHETIC OIL"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="FULL SYNTHETIC OIL" />}
                      label="FULL SYNTHETIC OIL"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="STATE INSPECTION" />}
                      label="STATE INSPECTION"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="FOUR WHEEL ALIGNMENT" />}
                      label="FOUR WHEEL ALIGNMENT"
                    />
                  </FormGroup>
                </Grid>
                {/* Second column */}
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CHECK AIR CONDITIONER" />}
                      label="CHECK AIR CONDITIONER"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CHECK HEATER" />}
                      label="CHECK HEATER"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CHECK EXHAUST SYSTEM" />}
                      label="CHECK EXHAUST SYSTEM"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="DO ENGINE TUNE-UP" />}
                      label="DO ENGINE TUNE-UP"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CHECK COOLING SYSTEM" />}
                      label="CHECK COOLING SYSTEM"
                    />
                  </FormGroup>
                </Grid>
                {/* Third column */}
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CONDITION INSPECTION" />}
                      label="CONDITION INSPECTION"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="ENGINE OIL LEAK" />}
                      label="ENGINE OIL LEAK"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="CHECK SHOCKS & STEERING" />}
                      label="CHECK SHOCKS & STEERING"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="SERVICE TRANSMISSION" />}
                      label="SERVICE TRANSMISSION"
                    />
                    <FormControlLabel
                      control={<Checkbox onChange={handleChange} name="serviceRequested" value="ROTATE/BALANCE TIRES" />}
                      label="ROTATE/BALANCE TIRES"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
    <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontSize: 20, fontWeight: 'bold' }}>Driveability:</FormLabel>
        <Grid container spacing={2}>
        {/* First column */}
        <Grid item xs={4}>
            <FormGroup>
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="TRANSMISSION LEAKS" />}
                label="TRANSMISSION LEAKS"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="TRANSMISSION NOISE" />}
                label="TRANSMISSION NOISE"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="ENGINE RUNS ERRATIC" />}
                label="ENGINE RUNS ERRATIC"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="NOISE IN ENGINE" />}
                label="NOISE IN ENGINE"
            />
            </FormGroup>
        </Grid>
        {/* Second column */}
        <Grid item xs={4}>
            <FormGroup>
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="NO STARTER ACTION" />}
                label="NO STARTER ACTION"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="WILL NOT START WHEN COLD" />}
                label="WILL NOT START WHEN COLD"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="WILL NOT START WHEN HOT" />}
                label="WILL NOT START WHEN HOT"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="IDLES POORLY" />}
                label="IDLES POORLY"
            />
            </FormGroup>
        </Grid>
        {/* Third column */}
        <Grid item xs={4}>
            <FormGroup>
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="ENGINE STALLS - BRAKING" />}
                label="ENGINE STALLS - BRAKING"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="ENGINE STALLS - TURNING" />}
                label="ENGINE STALLS - TURNING"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="ENGINE STALLS" />}
                label="ENGINE STALLS"
            />
            <FormControlLabel
                control={<Checkbox onChange={handleChange} name="driveability" value="ENGINE CRANKS/NO START" />}
                label="ENGINE CRANKS/NO START"
            />
            </FormGroup>
        </Grid>
        </Grid>
    </FormControl>
    </Grid>

    <Grid item xs={12}>
    <FormLabel htmlFor="otherConcern" sx={{ fontSize: 16, fontWeight: 'bold' }}>
        Other concerns/Services Needed:
    </FormLabel>
    <TextareaAutosize
        id="otherConcern"
        name="otherConcern"
        value={formData.otherConcern}
        onChange={handleChange}
        placeholder="Enter other concerns or services needed"
        minRows={6} 
        style={{
        width: '100%',
        marginTop: '8px',
        padding: '12px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '4px', 
        border: '1px solid #ccc', 
        }}
    />
    </Grid>
        <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox checked={formData.agreedToTerms} onChange={handleChange} name="agreedToTerms" color="primary" />}
                label="I hereby authorize the above repair work to be done along with the necessary material and hereby grant you and/or your employees permission to operate the vehicle herein described on streets, highways or elsewhere for the purpose of testing and/or inspections. I understand any cost quoted previously is an estimate only. Should the customer fail to authorize imposed for partial work completed. An express mechanic's cash, approved checks and credit card. completion of repairs services lien is hereby a Payment is expected on completion of sat the time customer approval is requested, a charge may be acknowledged on above vehicle to secure the amount of repairs. We accept cash, approved checks and credit card. Payment is expected on completion of repairs."
                />
        </Grid>
        <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
