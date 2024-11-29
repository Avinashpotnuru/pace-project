import { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
} from "@mui/material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    center: "",
    mode: "",
    examDate: "",
    school: "",
    currentClass: "",
    achievement: "",
    referralCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Quick Registration</h2>

      <form>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }} // Bold label style for Name
            />
          </Grid>

          {/* Mobile */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile"
              name="mobile"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.mobile}
              onChange={handleChange}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }} // Bold label style for Mobile
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }} // Bold label style for Email
            />
          </Grid>

          {/* City */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel
                style={{ fontWeight: "bold", fontSize: "1rem" }} // Bold label style for City
              >
                City
              </InputLabel>
              <Select
                name="city"
                value={formData.city}
                onChange={handleChange}
                label="City"
              >
                <MenuItem value="Select City">Select City</MenuItem>
                <MenuItem value="City 1">City 1</MenuItem>
                <MenuItem value="City 2">City 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Center */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel
                style={{ fontWeight: "bold", fontSize: "1rem" }} // Bold label style for Center
              >
                Center
              </InputLabel>
              <Select
                name="center"
                value={formData.center}
                onChange={handleChange}
                label="Center"
              >
                <MenuItem value="">Select Center</MenuItem>
                <MenuItem value="Center 1">Center 1</MenuItem>
                <MenuItem value="Center 2">Center 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Mode of Exam */}
          <Grid item xs={12}>
            <FormLabel
              component="legend"
              className="block"
              style={{ fontWeight: "bold" }}
            >
              Mode of Exam
            </FormLabel>
            <RadioGroup
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="Online"
                control={<Radio />}
                label="Online"
              />
              <FormControlLabel
                value="Offline"
                control={<Radio />}
                label="Offline"
              />
            </RadioGroup>
          </Grid>

          {/* Exam Date */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Exam Date"
              name="examDate"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.examDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
                style: {
                  fontWeight: "bold", // Bold label style
                  fontSize: "1rem", // Label size
                },
              }}
              InputProps={{
                style: {
                  paddingTop: "12px", // Adjust padding inside the input if needed
                },
              }}
             // Ensures label stays above input
            />
          </Grid>

          {/* School Name */}
          <Grid item xs={12}>
            <TextField
              label="Enter your school name"
              name="school"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.school}
              onChange={handleChange}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }} // Bold label style for School Name
            />
          </Grid>

          {/* Current Class */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel
                style={{ fontWeight: "bold", fontSize: "1rem" }} // Bold label style for Current Class
              >
                Current Class
              </InputLabel>
              <Select
                name="currentClass"
                value={formData.currentClass}
                onChange={handleChange}
                label="Current Class"
              >
                <MenuItem value="">Select Class</MenuItem>
                <MenuItem value="Class 1">Class 1</MenuItem>
                <MenuItem value="Class 2">Class 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Achievement */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel
                style={{ fontWeight: "bold", fontSize: "1rem" }} // Bold label style for Achievement
              >
                Achievement (If any)
              </InputLabel>
              <Select
                name="achievement"
                value={formData.achievement}
                onChange={handleChange}
                label="Achievement"
              >
                <MenuItem value="">Select Achievement</MenuItem>
                <MenuItem value="Achievement 1">Achievement 1</MenuItem>
                <MenuItem value="Achievement 2">Achievement 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Referral Code */}
          <Grid item xs={12}>
            <TextField
              label="Referral Code (Optional)"
              name="referralCode"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.referralCode}
              onChange={handleChange}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }} // Bold label style for Referral Code
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="mt-6"
              type="submit"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegistrationForm;
