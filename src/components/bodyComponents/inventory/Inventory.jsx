import { Grid, Box, Typography } from "@mui/material";

import React, { Component } from "react";
import Products from "./Products";
import Overview from "./Overview";
export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'Product A', stock: 50 },
        { id: 2, name: 'Product B', stock: 0 },
        { id: 3, name: 'Product C', stock: 30 },
      ],
    };
  }

  render() {
    return (
      <Box>
        <Grid container sx={{ mx: 3, p: 3 }}>
          <Grid item md={9}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Inventory
              </Typography>
              {/* Pass products data to Products component */}
              <Products products={this.state.products} />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                margin: 3,
                bgcolor: "white",
                borderRadius: 2,
                padding: 3,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
                Overview
              </Typography>
              <Overview />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

