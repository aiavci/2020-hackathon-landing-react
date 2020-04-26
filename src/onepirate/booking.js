import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {
  Card,
  GridList,
  CardActionArea,
  CardActions,
  Button,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";

const hotels = [
  {
    name: "Parallel Luxury Hotel",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Majestic Coast Resort & Spa",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Summer Canyon Resort",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Pacific Market Hotel",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Grand Expanse Hotel & Spa",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Triple Horizon Resort & Spa",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Spare Time Hotel & Spa",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Windmill Resort & Spa",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Salt Water Hotel & Spa",
    address: "123 test street",
    number: "6135551212",
  },
  {
    name: "Wonderland Hotel",
    address: "123 test street",
    number: "6135551212",
  },
];

function Panel() {
  return (
    <React.Fragment>
      <AppAppBar />
      <main>
        <div
          style={{ maxWidth: "80%", margin: "0 auto", flexDirection: "column" }}
        >
          <h3>Hotels:</h3>
          <GridList cellHeight={150} cols={5}>
            {hotels.map((h, i) => (
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
                  <Button size="small" color="primary" onClick={() => {}}>
                    View
                  </Button>
                </CardActions>
              </Card>
            ))}
          </GridList>
        </div>
      </main>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Panel);
