import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Searchbar from '../Searchbar';
import { expect } from '@jest/globals';

let searchText = '';
const setSearchText = jest.fn((value: string) => searchText = value);
let openStatus = true;
const setOpenStatus = jest.fn((value: boolean) => openStatus = value);
const setup = () => {
    const utils = render(<Searchbar searchText={searchText} setSearchText={setSearchText} statusFilter={openStatus} setStatusFilter={setOpenStatus} />)
    const input = screen.getByTestId('searchbar-input') as HTMLInputElement
    const clearBtn = screen.getByTestId('searchbar-close')
    const statusBtn = screen.getByTestId('searchbar-swap')
    return {
        input,
        clearBtn,
        statusBtn,
        ...utils,
    }
}
describe('Searchbar', () => {
    it('can type on input', () => {
        const { input } = setup()
        fireEvent.change(input, { target: { value: 'example text' } })
        expect(searchText).toBe('example text')
    });
    it('removes text on clear button click', () => {
        const { clearBtn } = setup()
        fireEvent.click(clearBtn)
        expect(searchText).toBe('')
    });
    it('changes status on status button click', () => {
        const { statusBtn } = setup()
        fireEvent.click(statusBtn)
        expect(openStatus).toBe(false)
    });
});