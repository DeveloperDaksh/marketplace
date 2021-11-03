import { Button, Box, Link, Container, Typography, Stack, Rating, InputBase, InputLabel, FormControl } from '@material-ui/core';

import { experimentalStyled as styled } from '@material-ui/core/styles';


export default function SearchBar() {
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 25,
            position: 'relative',
            backgroundColor: '#ffff',
            border: '1px solid #ced4da',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
            height: 40,
            color: '#0000'
        },
    }));

    return (

        <FormControl variant="standard" sx={{ display: 'flex', alignItems: 'center' }}>
            <BootstrapInput defaultValue="" placeholder="Search Here..." id="bootstrap-input" />

        </FormControl>
    )
}