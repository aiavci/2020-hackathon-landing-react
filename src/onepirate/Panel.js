import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";

import {
  Card,
  GridList,
  CardActionArea,
  CardActions,
  Button,
  IconButton,
  CardContent,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TextField,
} from "@material-ui/core";

import { DropzoneArea } from "material-ui-dropzone";

import { PhoneOutlined, AddCircle } from "@material-ui/icons";

const hotels = [
  {
    name: "Parallel Luxury Hotel",
    address: "2788  Swick Hill Street",
    number: "6135551212",
  },
  {
    name: "Majestic Coast Resort & Spa",
    address: "2921  Heron Way",
    number: "6135551212",
  },
  {
    name: "Summer Canyon Resort",
    address: "3529  McVaney Road",
    number: "6135551212",
  },
  {
    name: "Pacific Market Hotel",
    address: "2273  Willison Street",
    number: "6135551212",
  },
  {
    name: "Grand Expanse Hotel & Spa",
    address: "3568  College Street",
    number: "6135551212",
  },
  {
    name: "Triple Horizon Resort & Spa",
    address: "2544  Froe Street",
    number: "6135551212",
  },
  {
    name: "Spare Time Hotel & Spa",
    address: "413  Smith Street",
    number: "6135551212",
  },
  {
    name: "Windmill Resort & Spa",
    address: "318  Bee Street",
    number: "6135551212",
  },
  {
    name: "Salt Water Hotel & Spa",
    address: "1929  Boone Crockett Lane",
    number: "6135551212",
  },
  {
    name: "Wonderland Hotel",
    address: "4508  Windy Ridge Road",
    number: "6135551212",
  },
];

function Panel() {
  const [hotel, setHotel] = React.useState(null);
  const [client, setClient] = React.useState(null);
  const [step, setStep] = React.useState(0);
  const [booking, setBooking] = React.useState(false);
  return (
    <React.Fragment>
      <AppAppBar />
      <main>
        <div
          style={{
            maxWidth: "80%",
            margin: "0 auto",
            flexDirection: "column",
            minHeight: "80vh",
          }}
        >
          {booking ? (
            <>
              <h3>Booking Confirmation</h3>
              <p>
                This is a confirmation of your booking at {hotel.name}. Your
                confirmation code is Z123HD2A.
              </p>
            </>
          ) : hotel ? (
            <>
              <h3>Booking</h3>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Number</TableCell>
                      <TableCell>Book</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{hotel.name}</TableCell>
                      <TableCell>{hotel.address}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => window.open(`tel:${hotel.number}`)}
                        >
                          <PhoneOutlined />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setBooking(true);
                          }}
                        >
                          <AddCircle />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </>
          ) : client ? (
            <>
              <h3>Hotels:</h3>
              <GridList cellHeight={150} cols={5}>
                {hotels.map((h) => (
                  <Card style={{ margin: "1em" }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom component="h5">
                          {h.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          noWrap
                        >
                          {h.address}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          noWrap
                        >
                          {h.number}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{ padding: "0px", margin: "0px" }}>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          setHotel(h);
                        }}
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </GridList>
            </>
          ) : (
            <>
              <h3>Register client</h3>
              <form
                noValidate
                autoComplete="off"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "40em",
                }}
                onSubmit={(e) => {
                  e.preventDefault();

                  setClient({ name: "Robert" });
                }}
              >
                <TextField
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  type="name"
                  style={{ marginTop: "1em" }}
                />
                <TextField
                  id="phone"
                  label="Phone"
                  variant="outlined"
                  type="phone"
                  style={{ marginTop: "1em" }}
                />
                <TextField
                  id="licenseNumber"
                  label="Drivers License Number"
                  variant="outlined"
                  style={{ marginTop: "1em" }}
                />
                <div style={{ marginTop: "1em" }}>
                  <h4>Upload valid ID</h4>
                  <DropzoneArea onChange={() => {}} showPreviews={true} />
                </div>
                <Button
                  type="submit"
                  variant="outlined"
                  style={{
                    maxWidth: "10em",
                    marginTop: "1em",
                    alignSelf: "flex-end",
                  }}
                >
                  Register
                </Button>
              </form>
            </>
          )}
        </div>
      </main>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Panel);
