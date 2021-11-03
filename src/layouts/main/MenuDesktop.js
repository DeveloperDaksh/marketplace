import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Box, Link, Grid, List, Stack, Popover, ListItem, ListItemText, Collapse, CardActionArea, Menu, MenuItem, Divider, Paper } from '@material-ui/core';
import { Block } from 'src/pages/components-overview/Block'
// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item'])
};

const ListWrapperStyle = styled(Paper)(({ theme }) => ({
  width: '100%',
  border: `solid 1px ${theme.palette.divider}`
}));

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 })
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

function MenuDesktopItem({ item, pathname, isHome, isOffset, onOpen, onClose }) {
  const [isOpen, setOpen] = useState(null);
  const [nestedOpen, setNested] = useState(null);

  const { title, path, children } = item;
  const isActive = pathname === path;

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const openNested = (event) => {
    setNested(event.currentTarget)
  }
  const handleClose = () => {
    setOpen(null);
    setNested(null);
  };

  if (children) {
    return (
      <div key={title}>
        <LinkStyle
          onMouseOver={handleOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'common.black' }),
            ...(isOffset && { color: 'text.dark' }),
            ...(isOpen && { opacity: 0.48 })
          }}
        >
          {title}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>
        <Grid container>
          <Grid item >
            <Menu keepMounted id="simple-menu" anchorEl={isOpen} open={Boolean(isOpen)} onClose={handleClose}
              sx={{ mt: '1.5rem' }}>
              {children.map((option) => (
                "subheader" in option ? (
                  <><MenuItem keepMounted id="simple-menu" anchorPosition={nestedOpen} open={Boolean(nestedOpen)} key={option.subheader} onMouseOver={openNested}>
                    {option.subheader}
                    <Box
                      component={Icon}
                      icon={nestedOpen ? arrowIosDownwardFill : {}}
                      sx={{ ml: 0.5, width: 16, height: 16 }}
                    />
                  </MenuItem>
                    <Divider />
                    {Boolean(nestedOpen) && option.items.map((item) => (
                      <>
                        <MenuItem key={item["title"]} sx={{ ml: 1 }} onClick={handleClose}>{item.title}</MenuItem>

                      </>
                    ))
                    }
                    <Divider />
                  </>
                )
                  :
                  (<><MenuItem key={option.title} onClick={handleClose}>
                    {option.title}
                  </MenuItem>
                    <Divider />

                  </>
                  )

              ))}
            </Menu>
          </Grid>
        </Grid>
      </div>


    );
  }

  return (
    <LinkStyle
      key={title}
      to={path}
      component={RouterLink}
      sx={{
        ...(isHome && { color: 'common.white' }),
        ...(isOffset && { color: 'text.primary' }),
        ...(isActive && { color: 'primary.main' })
      }}
    >
      {title}
    </LinkStyle>
  );
}

MenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          pathname={pathname}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}

/**
 *
 * isOpen ? (<>
          <Grid container>
            <Grid item >

              {
                children.map((option) => (
                  "subheader" in option ? (<>
                    <List
                      component="nav"
                    >
                      <ListItem button onClick={openNested}>

                        <ListItemText primary={option["subheader"]} />
                        {nestedOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>

                    </List>
                    {Boolean(nestedOpen) && option.items.map((item) => (
                      <ListWrapperStyle sx={{ ml: '100%' }}>
                        <List component="nav">
                          <Collapse in={nestedOpen} timeout="auto" unmountOnExit >
                            <List component="div" disablePadding>
                              <ListItem button>

                                <ListItemText primary={item.title} />
                              </ListItem>
                            </List>
                          </Collapse>
                        </List>
                      </ListWrapperStyle>
                    ))}

                  </>)
                    : (<>
                      <List
                        component="nav"
                      >
                        <ListItem button>

                          <ListItemText primary={option.title} />
                        </ListItem>

                      </List>
                    </>
                    )
                ))

              }
            </Grid>
          </Grid>
        </>
      ) : <></>

 *
 *

 *
*/