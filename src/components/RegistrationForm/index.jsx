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
  Typography,
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for the field being updated
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.city) newErrors.city = "Please select a city";
    if (!formData.center) newErrors.center = "Please select a center";
    if (!formData.mode) newErrors.mode = "Please select an exam mode";
    if (!formData.examDate) newErrors.examDate = "Exam date is required";
    if (!formData.school.trim()) newErrors.school = "School name is required";
    if (!formData.currentClass)
      newErrors.currentClass = "Please select a class";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully:", formData);
      console.log("Form submitted successfully:", formData);
      setFormData({
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

      // Add submission logic (e.g., API call) here
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-2 md:p-6 bg-white rounded-lg shadow-lg  ">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
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
              error={!!errors.name}
              helperText={errors.name}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }}
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
              error={!!errors.mobile}
              helperText={errors.mobile}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }}
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
              error={!!errors.email}
              helperText={errors.email}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }}
            />
          </Grid>

          {/* City */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" error={!!errors.city}>
              <InputLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
                City
              </InputLabel>
              <Select
                name="city"
                value={formData.city}
                onChange={handleChange}
                label="City"
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="City 1">City 1</MenuItem>
                <MenuItem value="City 2">City 2</MenuItem>
              </Select>
              {errors.city && (
                <Typography variant="caption" color="error">
                  {errors.city}
                </Typography>
              )}
            </FormControl>
          </Grid>

          {/* Center */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" error={!!errors.center}>
              <InputLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
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
              {errors.center && (
                <Typography variant="caption" color="error">
                  {errors.center}
                </Typography>
              )}
            </FormControl>
          </Grid>

          {/* Mode of Exam */}
          <Grid item xs={12} sm={6}>
            <FormLabel component="legend" style={{ fontWeight: "bold" }}>
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
                style={{ color: "black" }} // Ensure text is visible
              />
              <FormControlLabel
                value="Offline"
                control={<Radio />}
                label="Offline"
                style={{ color: "black" }} // Ensure text is visible
              />
            </RadioGroup>
            {errors.mode && (
              <Typography variant="caption" color="error">
                {errors.mode}
              </Typography>
            )}
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
              error={!!errors.examDate}
              helperText={errors.examDate}
              InputLabelProps={{
                shrink: true,
                style: { fontWeight: "bold", fontSize: "1rem" },
              }}
            />
          </Grid>

          {/* School */}
          <Grid item xs={12}>
            <TextField
              label="Enter your school name"
              name="school"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.school}
              onChange={handleChange}
              error={!!errors.school}
              helperText={errors.school}
              InputLabelProps={{
                style: { fontWeight: "bold", fontSize: "1rem" },
              }}
            />
          </Grid>

          {/* Current Class */}
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.currentClass}
            >
              <InputLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
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
              {errors.currentClass && (
                <Typography variant="caption" color="error">
                  {errors.currentClass}
                </Typography>
              )}
            </FormControl>
          </Grid>

          {/* Achievement */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel style={{ fontWeight: "bold", fontSize: "1rem" }}>
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
              }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{
                padding: "12px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RegistrationForm;
