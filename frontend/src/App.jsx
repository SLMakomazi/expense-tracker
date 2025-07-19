import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

// Import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Admin from './pages/Admin';
import Navigation from './components/Navigation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
          />
          <Route
            path="/reports"
            element={user ? <Reports user={user} /> : <Login setUser={setUser} />}
          />
          <Route
            path="/admin"
            element={user && user.isAdmin ? <Admin /> : <Login setUser={setUser} />}
          />
          <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
