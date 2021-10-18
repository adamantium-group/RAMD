import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function Navbar(props) {
  const agregar = props.agregar;
  const consultar = props.consultar;
  const gestionar = props.gestionar;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ px: 13, bgcolor: '#FFFFFF' }} position="static">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'rows',
            justifyContent: 'space-between',
          }}
        >
          <Link
            sx={{
              fontFamily: 'Noto Sans',
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1.65,
            }}
            color="#343A40"
            underline="none"
            component={RouterLink}
            to="/"
          >
            Ramdify
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'rows',
              justifyContent: 'space-between',
              width: 400,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            <Box>
              {agregar ? (
                <Link
                  color="#006D81"
                  underline="none"
                  component={RouterLink}
                  to="/agregar"
                >
                  Agregar
                </Link>
              ) : (
                <Link
                  color="#B9B9B9"
                  underline="none"
                  component={RouterLink}
                  to="/agregar"
                >
                  Agregar
                </Link>
              )}
            </Box>

            <Box>
              {consultar ? (
                <Link
                  color="#006D81"
                  underline="none"
                  component={RouterLink}
                  to="/consultar"
                >
                  Consultar
                </Link>
              ) : (
                <Link
                  color="#B9B9B9"
                  underline="none"
                  component={RouterLink}
                  to="/consultar"
                >
                  Consultar
                </Link>
              )}
            </Box>

            <Box>
              {gestionar ? (
                <Link
                  color="#006D81"
                  underline="none"
                  component={RouterLink}
                  to="/gestionar"
                >
                  Gestionar
                </Link>
              ) : (
                <Link
                  color="#B9B9B9"
                  underline="none"
                  component={RouterLink}
                  to="/gestionar"
                >
                  Gestionar
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
