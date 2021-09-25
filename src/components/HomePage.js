import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Grid,
  Box,
  Container,
  Avatar,
  Stack,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import Buttons from "./Buttons";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData() {
      const API_URL = `https://jsonplaceholder.typicode.com/users`;
      await axios
        .get(API_URL)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          return err;
        });
    }
    loadData();
  }, []);

  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "1em" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {users.map((user) => (
            <Grid item xs={2} sm={3} md={4} key={user.id}>
              <Card sx={{ maxWidth: 250, height: 350 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  style={{ justifyContent: "center", padding: "16px" }}
                >
                  <Avatar
                    sx={{ width: 100, height: 100 }}
                    style={{ fontWeight: "bold", fontSize: "3em" }}
                  >
                    {user.name[0]}
                  </Avatar>
                </Stack>
                <CardContent style={{ textAlign: "center", height: "110px" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontStyle: "italic" }}
                  >
                    @{user.username}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#2196F3",
                      textDecoration: "underline",
                    }}
                  >
                    {user.email}
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Buttons props={user.id} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
