'use client';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Paper,
    Select,
    Switch,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Toolbar,
    Typography
} from '@mui/material';
import React, { useState } from 'react';

import {
    Add as AddIcon,
    AttachMoney as AttachMoneyIcon,
    BarChart as BarChartIcon,
    Dashboard as DashboardIcon,
    Delete as DeleteIcon,
    Discount as DiscountIcon,
    Edit as EditIcon,
    ExitToApp as ExitToAppIcon,
    ExpandMore as ExpandMoreIcon,
    Help as HelpIcon,
    Inventory as InventoryIcon,
    Language as LanguageIcon,
    Message as MessageIcon,
    Notifications as NotificationsIcon,
    People as PeopleIcon,
    Search as SearchIcon,
    Settings as SettingsIcon,
    LocalShipping as ShippingIcon,
    ShoppingCart as ShoppingCartIcon,
    Storefront as StorefrontIcon,
    TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Component() {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Advanced Seller Dashboard
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <MessageIcon />
          </IconButton>
          <IconButton color="inherit">
            <LanguageIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
        >
          <Tab icon={<DashboardIcon />} label="Dashboard" />
          <Tab icon={<ShoppingCartIcon />} label="Orders" />
          <Tab icon={<PeopleIcon />} label="Customers" />
          <Tab icon={<InventoryIcon />} label="Products" />
          <Tab icon={<BarChartIcon />} label="Analytics" />
          <Tab icon={<AttachMoneyIcon />} label="Finances" />
          <Tab icon={<ShippingIcon />} label="Shipping" />
          <Tab icon={<StorefrontIcon />} label="Online Store" />
          <Tab icon={<DiscountIcon />} label="Discounts" />
          <Tab icon={<TrendingUpIcon />} label="Marketing" />
          <Tab icon={<SettingsIcon />} label="Settings" />
        </Tabs>
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Total Sales
                    </Typography>
                    <Typography variant="h5" component="div">
                      $15,350
                    </Typography>
                    <Typography color="textSecondary">
                      15% increase from last month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Orders
                    </Typography>
                    <Typography variant="h5" component="div">
                      356
                    </Typography>
                    <Typography color="textSecondary">
                      5% increase from last month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Customers
                    </Typography>
                    <Typography variant="h5" component="div">
                      1,245
                    </Typography>
                    <Typography color="textSecondary">
                      10% increase from last month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Avg. Order Value
                    </Typography>
                    <Typography variant="h5" component="div">
                      $43.12
                    </Typography>
                    <Typography color="textSecondary">
                      2% increase from last month
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Sales Performance
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <RechartsTooltip />
                      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Top Selling Products
                  </Typography>
                  <List>
                    {['T-Shirt', 'Jeans', 'Sneakers', 'Hat', 'Jacket'].map((product, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={product} secondary={`${Math.floor(Math.random() * 100) + 1} sold`} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Quick Actions
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button variant="outlined" startIcon={<AddIcon />}>
                        Add Product
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" startIcon={<DiscountIcon />}>
                        Create Discount
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
                        View Orders
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" startIcon={<TrendingUpIcon />}>
                        Run Marketing Campaign
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Orders
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Fulfillment</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { id: '1234', customer: 'John Doe', date: '2023-06-01', amount: '$120.50', status: 'Paid', fulfillment: 'Unfulfilled' },
                      { id: '1235', customer: 'Jane Smith', date: '2023-06-02', amount: '$75.20', status: 'Paid', fulfillment: 'Fulfilled' },
                      { id: '1236', customer: 'Bob Johnson', date: '2023-06-03', amount: '$200.00', status: 'Pending', fulfillment: 'Unfulfilled' },
                      { id: '1237', customer: 'Alice Brown', date: '2023-06-04', amount: '$150.75', status: 'Paid', fulfillment: 'Partially Fulfilled' },
                      { id: '1238', customer: 'Charlie Davis', date: '2023-06-05', amount: '$90.30', status: 'Paid', fulfillment: 'Fulfilled' },
                    ].map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.customer}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                        <TableCell>
                          <Chip label={row.status} color={row.status === 'Paid' ? 'success' : 'warning'} />
                        </TableCell>
                        <TableCell>
                          <Chip label={row.fulfillment} color={
                            row.fulfillment === 'Fulfilled' ? 'success' :
                            row.fulfillment === 'Partially Fulfilled' ? 'warning' :
                            'error'
                          } />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" color="primary">
                            <SearchIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Customer List
              </Typography>
              <TextField
                label="Search Customers"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Orders</TableCell>
                      <TableCell>Total Spent</TableCell>
                      <TableCell>Last Order</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: '$550.25', lastOrder: '2023-05-30' },
                      { name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: '$320.80', lastOrder: '2023-06-02' },
                      { name: 'Bob Johnson', email: 'bob@example.com', orders: 7, totalSpent: '$780.50', lastOrder: '2023-06-05' },
                      { name: 'Alice Brown', email: 'alice@example.com', orders: 2, totalSpent: '$150.75', lastOrder: '2023-05-28' },
                      { name: 'Charlie Davis', email: 'charlie@example.com', orders: 4, totalSpent: '$410.30', lastOrder: '2023-06-01' },
                    ].map((customer, index) => (
                      <TableRow key={index}>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.orders}</TableCell>
                        <TableCell>{customer.totalSpent}</TableCell>
                        <TableCell>{customer.lastOrder}</TableCell>
                        <TableCell>
                          <Button variant="outlined" size="small">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Product Inventory
              </Typography>
              <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenDialog}>
                Add New Product
              </Button>
              <TableContainer sx={{ mt: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell>SKU</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Stock</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'T-Shirt', sku: 'TS001', price: '$19.99', stock: 100, status: 'Active' },
                      { name: 'Jeans', sku: 'JN001', price: '$49.99', stock: 75, status: 'Active' },
                      { name: 'Sneakers', sku: 'SN001', price: '$79.99', stock: 50, status: 'Low Stock' },
                      { name: 'Hat', sku: 'HT001', price: '$14.99', stock: 150, status: 'Active' },
                      { name: 'Jacket', sku: 'JK001', price: '$89.99', stock: 25, status: 'Low Stock' },
                    ].map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <Chip label={product.status} color={product.status === 'Active' ? 'success' : 'warning'} />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" color="primary">
                            <SearchIcon />
                          </IconButton>
                          <IconButton size="small" color="secondary">
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Sales by Category
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Clothing', value: 400 },
                          { name: 'Electronics', value: 300 },
                          { name: 'Home & Garden', value: 200 },
                          { name: 'Sports', value: 150 },
                          { name: 'Books', value: 100 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {salesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Customer Acquisition
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={[
                      { source: 'Organic Search', customers: 500 },
                      { source: 'Paid Ads', customers: 300 },
                      { source: 'Social Media', customers: 200 },
                      { source: 'Referrals', customers: 150 },
                      { source: 'Direct', customers: 100 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="source" />
                      <YAxis />
                      <RechartsTooltip />
                      <Bar dataKey="customers" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Sales Forecast
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[
                      { month: 'Jul', actual: 4000, forecast: 4200 },
                      { month: 'Aug', actual: 3000, forecast: 3500 },
                      { month: 'Sep', actual: 5000, forecast: 4800 },
                      { month: 'Oct', forecast: 5200 },
                      { month: 'Nov', forecast: 5500 },
                      { month: 'Dec', forecast: 6000 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Sales" />
                      <Line type="monotone" dataKey="forecast" stroke="#82ca9d" name="Forecasted Sales" />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Recent Transactions
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Transaction ID</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Type</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          { id: 'T1234', date: '2023-06-01', amount: '$120.50', type: 'Sale' },
                          { id: 'T1235', date: '2023-06-02', amount: '$75.20', type: 'Sale' },
                          { id: 'T1236', date: '2023-06-03', amount: '$200.00', type: 'Refund' },
                          { id: 'T1237', date: '2023-06-04', amount: '$150.75', type: 'Sale' },
                          { id: 'T1238', date: '2023-06-05', amount: '$90.30', type: 'Sale' },
                        ].map((transaction, index) => (
                          <TableRow key={index}>
                            <TableCell>{transaction.id}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>
                              <Chip label={transaction.type} color={transaction.type === 'Sale' ? 'success' : 'error'} />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Financial Summary
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Total Revenue" secondary="$15,350" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Total Expenses" secondary="$5,280" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Net Profit" secondary="$10,070" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Profit Margin" secondary="65.6%" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Shipping Settings
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Default Shipping Method</InputLabel>
                    <Select>
                      <MenuItem value="standard">Standard Shipping</MenuItem>
                      <MenuItem value="express">Express Shipping</MenuItem>
                      <MenuItem value="overnight">Overnight Shipping</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Shipping Zones</InputLabel>
                    <Select>
                      <MenuItem value="domestic">Domestic</MenuItem>
                      <MenuItem value="international">International</MenuItem>
                      <MenuItem value="both">Both</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Offer Free Shipping"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Free Shipping Threshold"
                    type="number"
                    fullWidth
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Online Store Customization
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Theme</InputLabel>
                    <Select>
                      <MenuItem value="default">Default Theme</MenuItem>
                      <MenuItem value="modern">Modern Theme</MenuItem>
                      <MenuItem value="classic">Classic Theme</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Layout</InputLabel>
                    <Select>
                      <MenuItem value="grid">Grid Layout</MenuItem>
                      <MenuItem value="list">List Layout</MenuItem>
                      <MenuItem value="masonry">Masonry Layout</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">
                    Customize Theme
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Discount Management
              </Typography>
              <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{ mb: 2 }}>
                Create New Discount
              </Button>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Discount Code</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { code: 'SUMMER20', type: 'Percentage', value: '20%', start: '2023-06-01', end: '2023-08-31', status: 'Active' },
                      { code: 'FREESHIP', type: 'Fixed Amount', value: '$10', start: '2023-07-01', end: '2023-07-31', status: 'Scheduled' },
                      { code: 'WELCOME10', type: 'Percentage', value: '10%', start: '2023-01-01', end: '2023-12-31', status: 'Active' },
                    ].map((discount, index) => (
                      <TableRow key={index}>
                        <TableCell>{discount.code}</TableCell>
                        <TableCell>{discount.type}</TableCell>
                        <TableCell>{discount.value}</TableCell>
                        <TableCell>{discount.start}</TableCell>
                        <TableCell>{discount.end}</TableCell>
                        <TableCell>
                          <Chip label={discount.status} color={discount.status === 'Active' ? 'success' : 'default'} />
                        </TableCell>
                        <TableCell>
                          <IconButton size="small" color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton size="small" color="secondary">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={9}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Marketing Campaigns
              </Typography>
              <Button variant="contained" color="primary" startIcon={<AddIcon />} sx={{ mb: 2 }}>
                Create New Campaign
              </Button>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Campaign Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Performance</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: 'Summer Sale', type: 'Email', start: '2023-06-01', end: '2023-08-31', status: 'Active', performance: 'Good' },
                      { name: 'New Product Launch', type: 'Social Media', start: '2023-07-15', end: '2023-08-15', status: 'Scheduled', performance: 'N/A' },
                      { name: 'Holiday Special', type: 'Multi-channel', start: '2023-12-01', end: '2023-12-31', status: 'Draft', performance: 'N/A' },
                    ].map((campaign, index) => (
                      <TableRow key={index}>
                        <TableCell>{campaign.name}</TableCell>
                        <TableCell>{campaign.type}</TableCell>
                        <TableCell>{campaign.start}</TableCell>
                        <TableCell>{campaign.end}</TableCell>
                        <TableCell>
                          <Chip label={campaign.status} color={
                            campaign.status === 'Active' ? 'success' :
                            campaign.status === 'Scheduled' ? 'primary' :
                            'default'
                          } />
                        </TableCell>
                        <TableCell>{campaign.performance}</TableCell>
                        <TableCell>
                          <IconButton size="small" color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton size="small" color="secondary">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={10}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Store Settings
              </Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>General Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField label="Store Name" fullWidth margin="normal" />
                  <TextField label="Store URL" fullWidth margin="normal" />
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Currency</InputLabel>
                    <Select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value as string)}>
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="GBP">GBP</MenuItem>
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Payment Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Payment Gateway</InputLabel>
                    <Select>
                      <MenuItem value="stripe">Stripe</MenuItem>
                      <MenuItem value="paypal">PayPal</MenuItem>
                      <MenuItem value="square">Square</MenuItem>
                    </Select>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Tax Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Enable Automatic Tax Calculation"
                  />
                  <TextField label="Default Tax Rate" type="number" fullWidth margin="normal" />
                </AccordionDetails>
              </Accordion>
            </Paper>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}