interface ApiResponse<T> {
    data?: T;
    error?: string;
}

export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        };

        const response = await fetch(endpoint, {
            ...options,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'An error occurred');
        }

        return { data };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'An error occurred',
        };
    }
}

export const api = {
    get: <T>(endpoint: string) => apiRequest<T>(endpoint),
    post: <T, D = Record<string, unknown>>(endpoint: string, data: D) =>
        apiRequest<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        }),
    put: <T, D = Record<string, unknown>>(endpoint: string, data: D) =>
        apiRequest<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        }),
    delete: <T, D = Record<string, unknown>>(endpoint: string, data: D) =>
        apiRequest<T>(endpoint, {
            method: 'DELETE',
        }),
}; 