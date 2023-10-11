import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';

const BookManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const books = [
    {
      title: 'Book 1',
      categories: ['Fiction', 'Fantasy'],
      count: 10,
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Book 2',
      categories: ['Non-fiction', 'Self-help'],
      count: 5,
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Book 3',
      categories: ['Mystery', 'Thriller'],
      count: 7,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the book to the cart here
    // For example, you can maintain a separate state for the cart items.
  };

  const filteredBooks = selectedCategory ? books.filter((book) => book.categories.includes(selectedCategory)) : books;

  return (
    <Container>
      <TextField label="Search" variant="outlined" fullWidth value={searchTerm} onChange={handleSearchChange} />
      <Button variant="outlined" color="primary" style={{ marginTop: 10 }} onClick={() => handleCategoryFilter('')}>
        All
      </Button>
      {['Fiction', 'Fantasy', 'Non-fiction', 'Self-help', 'Mystery', 'Thriller'].map((category, index) => (
        <Button
          key={index}
          variant="outlined"
          color="primary"
          style={{ marginTop: 10, marginLeft: 10 }}
          onClick={() => handleCategoryFilter(category)}
        >
          {category}
        </Button>
      ))}
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {filteredBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="150" image={book.image} alt={book.title} />
              <CardContent>
                <Typography variant="h6" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Categories: {book.categories.join(', ')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Available: {book.count} in stock
                </Typography>
                <Button variant="contained" color="primary" onClick={handleAddToCart} style={{ marginTop: 10 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookManagement;
