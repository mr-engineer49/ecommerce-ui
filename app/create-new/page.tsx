'use client';


import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function CreateNewProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    salePrice: '',
    category: '',
    stockQuantity: '',
    images: [],
    video: null,
  });


  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Product
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
            <>
                  <TextField
                    fullWidth
                    label="Product Name"
                    name="name"
                    value={product.name}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={product.description}
                    multiline
                    rows={4}
                  />

                  <FormControl fullWidth required>
                    <InputLabel>Category</InputLabel>
                    <Select
                      name="category"
                      value={product.category}
                      label="Category"
                    >
                      <MenuItem value="electronics">Electronics</MenuItem>
                      <MenuItem value="clothing">Clothing</MenuItem>
                      <MenuItem value="books">Books</MenuItem>
                      <MenuItem value="home">Home & Garden</MenuItem>
                      <MenuItem value="toys">Toys</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Stock Quantity"
                    name="stockQuantity"
                    type="number"
                    value={product.stockQuantity}
                    required
                  />
                                <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Create Product
              </Button>
            </>

        </Paper>
      </Box>
    </Container>
  );
}

