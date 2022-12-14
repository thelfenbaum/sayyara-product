import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { PATHS } from '../../constants';

import logo from '../../assets/images/logo-white.png';
import Person from '@mui/icons-material/Person';

interface TopNavProps {
  height: number,
  uiWidth: number
}

const TopNav = ({ height, uiWidth }: TopNavProps) => {
  const theme = useTheme();

  const IMG_HEIGHT = height - 25;

  const isLoggedIn = () => {
    return sessionStorage.getItem('x-access-token') !== null && 
          sessionStorage.getItem('userId') !== null &&
          sessionStorage.getItem('roleId') !== null;
  };

  const getLink = () => {
    if (isLoggedIn()) {
      return `/user/${sessionStorage.getItem('userId')}`;
    }
    return PATHS.LANDING;
  };

  return (
    <Box height={height} bgcolor={theme.palette.primary.main}>
      <Box 
        maxWidth={uiWidth}
        margin="0 auto"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height={height}
        >
          <Link to={PATHS.LANDING}>
            <Box
              marginLeft={theme.spacing(2)}
              height={height}
              display="flex"
              alignItems="center"
            >
                <img height={IMG_HEIGHT} src={logo}/>
            </Box>
          </Link>
          <Box marginRight={theme.spacing(2)}>
            <Link to={getLink()}>
              <Avatar sizes="20" sx={{ bgcolor: "secondary.main", padding: 0 }}>
                <Person sx={{ color: "primary.main" }}/>
              </Avatar>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNav;