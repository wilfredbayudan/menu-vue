import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSearchParams } from "react-router-dom";

const SelectBusiness = ({ ownedBusinesses, selectedBusiness, setSelectedBusiness }) => {

  const [, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSelectedBusiness(event.target.value);
    setSearchParams({ businessId: event.target.value })
  };

  const renderOwnedBusinesses = ownedBusinesses.map((business, businessIdx) => {
    return <MenuItem key={businessIdx} value={business.business_id}>{business.name}</MenuItem>;
  })

  console.log(ownedBusinesses);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-business">Select A Business</InputLabel>
        <Select
          labelId="select-business"
          id="business-select"
          value={selectedBusiness}
          label="Select a business"
          onChange={handleChange}
        >
          {renderOwnedBusinesses}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectBusiness;