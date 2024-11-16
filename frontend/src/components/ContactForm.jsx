import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Box } from '@mui/material';

export default function ContactForm({ onSubmit, initialData }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      jobTitle: '',
    },
  });

  // Update form values when initialData changes
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmitForm = (data) => {
    onSubmit(data);
    if (!initialData) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="First Name"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Last Name"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: 'Phone number is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Phone Number"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Company" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="jobTitle"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Job Title" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              {initialData ? 'Update Contact' : 'Add Contact'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    company: PropTypes.string,
    jobTitle: PropTypes.string,
  }),
};
