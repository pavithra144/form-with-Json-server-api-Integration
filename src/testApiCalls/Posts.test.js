import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'
import Post from './Posts';
import React from 'react';

describe('api calls for post data', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('show loading.. initially', () => {
        axios.get.mockResolvedValue({
            data: []
        })
        render(<Post />)

        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    })
    test('should sucess the post api', async () => {
        axios.get.mockResolvedValue({
            data: [{
                id: 1,
                title: 'Test Post'
            }]
        })
        render(<Post />);

        await waitFor(() => {
            expect(screen.getByText('Test Post')).toBeInTheDocument();
        })
    })

    test('displays or errors when api fails', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        render(<Post />);

        await waitFor(() => {
            expect(screen.queryByText('Test Post')).not.toBeInTheDocument();
        })
    })
})