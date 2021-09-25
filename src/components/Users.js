import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Grid, Container, CardContent, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Users() {
  const classes = useStyles();
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadData() {
      const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
      await axios
        .get(API_URL)
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          return err;
        });
    }
    loadData();
  }, [id]);

  return (
    <Container fixed>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ padding: "2em" }}
      >
        <Card sx={{ maxWidth: 500 }} style={{ padding: "2em" }}>
          <CardContent>
            <ul className={classes.dashed} style={{ listStyleType: "- "}}>
              <li className={classes.li}>
                <Typography
                  variant="h5"
                  className={classes.text}
                >{`name: ${user.name}`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography
                  variant="h5"
                  className={classes.text}
                >{`username: ${user.username}`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography
                  variant="h5"
                  className={classes.text}
                >{`email: ${user.email}`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography
                  variant="h5"
                  className={classes.text}
                >{`phone: ${user.phone}`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography variant="h5" className={classes.text}>{`company: ${
                  user.company && user.company.name
                    ? user.company.name
                    : "Loading ..."
                }`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography
                  variant="h5"
                  className={classes.text}
                >{`website: ${user.website}`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography variant="h5" className={classes.text}>
                  Address
                </Typography>
              </li>
            </ul>
            <ul style={{ margin: 0 }}>
              <li className={classes.li}>
                <Typography variant="h5" className={classes.text}>{`street: ${
                  user.address && user.address.street
                    ? user.address.street
                    : "Loading ..."
                }`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography variant="h5" className={classes.text}>{`suite: ${
                  user.address && user.address.suite
                    ? user.address.suite
                    : "Loading ..."
                }`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography variant="h5" className={classes.text}>{`city: ${
                  user.address && user.address.city
                    ? user.address.city
                    : "Loading ..."
                }`}</Typography>
              </li>
              <li className={classes.li}>
                <Typography variant="h5" className={classes.text}>{`zipcode: ${
                  user.address && user.address.zipcode
                    ? user.address.zipcode
                    : "Loading ..."
                }`}</Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles({
  text: {
    fontWeight: "bold",
    fontSize: "1.5em",
    color: "#616161",
  },
  li: {
    color: "#616161",
  },
  dashed: {
    margin: 0,
    padding: 0,
    listStyleType: "square",
  },
});
