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

    }))

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    const [dropdownValue, setDropDown] = useState('');

    const changeValue = (e) => {
        setDropDown(e.currentTarget.textContent)
    }


    return (<FormInner style={{ backgroundColor: 'white', maxWidth: '300px', }}>
        <InputGroup style={{
            display: 'flex', flexWrap: 'wrap',
            position: 'relative',
            border: '0px',
            borderRadius: '130px',
            height: '40px',
            width: '100%'
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
                    margin: 5

                }}>{dropdownValue}</DropdownToggle>
                <DropdownMenu direction="right">
                    <DropdownItem onClick={changeValue}>
                        Option 1
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={changeValue}>
                        Option 2
                    </DropdownItem>

                </DropdownMenu>
            </ButtonDropdown>
            <Input placeholder="Search Here" style={{
                backgroundColor: 'white',
                color: 'black',
                border: '0px',
                margin: 5,

            }} />
        </InputGroup>
    </FormInner>
    )
}