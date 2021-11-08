import { Box, Link, Container, Typography, Stack, Rating, InputBase, InputLabel, FormControl } from '@material-ui/core';
import { useState } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { position } from 'stylis';
import {
    InputGroup,
    ButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

export default function SearchBar() {


    const FormInner = styled('div')(({ theme }) => ({

        padding: '3px',
        borderRadius: '130px',
        width: '100%',
        border: '4px solid rgba(255, 204, 192, 0.3)'
    }))

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    const [dropdownValue, setDropDown] = useState('Freelancers');

    const changeValue = (e) => {
        setDropDown(e.currentTarget.textContent)
    }


    return (<FormInner style={{ backgroundColor: 'white' }}>
        <InputGroup style={{
            display: 'flex', flexWrap: 'wrap', width: '100%',
            position: 'relative',
            padding: 4, border: '0px', borderRadius: '130px'
        }}>
            <ButtonDropdown
                addonType="prepend"
                isOpen={splitButtonOpen}
                toggle={toggleSplit}
            >
                <DropdownToggle caret style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '0px',
                    width: '165px',
                    margin: 5

                }}>{dropdownValue}</DropdownToggle>
                <DropdownMenu direction="right">
                    <DropdownItem onClick={changeValue}>
                        Freelancers
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={changeValue}>
                        Projects
                    </DropdownItem>

                </DropdownMenu>
            </ButtonDropdown>
            <Input placeholder="Search Here" style={{
                backgroundColor: 'white',
                color: 'black',
                border: '0px',
                margin: 5,

            }} />
            <Button style={{
                backgroundColor: '#ff5b37',
                fontWeight: 'bold',
                border: '1px solid #ff5b37',
                borderRadius: '50px',
                margin: 5,
                fontSize: '18px',
                lineHeight: '18px',
                height: '65px',
                textTransform: 'uppercase',
                color: '#fff'
            }}>
                search now
            </Button>
        </InputGroup>
    </FormInner>
    )
}