import { useState } from 'react';
import { Api } from '../Api/Api';

export const useUpload = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const uploadFile = async (file, title) => {
        setIsLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);

        try {
            const response = await Api.post('/upload', formData, true, true);
            return response.data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { uploadFile, isLoading, error };
};
