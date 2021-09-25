import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Buttons({ props }) {
  return (
    <Button component={Link} to={`/users/${props}`} variant="contained">
      <Typography variant="body2">MORE DETAILS</Typography>
    </Button>
  );
}
