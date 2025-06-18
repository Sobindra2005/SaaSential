interface ApiResponse<T> {
    data?: T;
    error?: string;
    status?: number;
}

class APIError extends Error {
    status: number;
    
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
        this.name = 'APIError';
    }
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
            switch (response.status) {
                case 400:
                    throw new APIError(data.message || 'Bad Request', 400);
                case 401:
                    throw new APIError(data.message || 'Unauthorized', 401);
                case 403:
                    throw new APIError(data.message || 'Forbidden', 403);
                case 404:
                    throw new APIError(data.message || 'Not Found', 404);
                case 409:
                    throw new APIError(data.message || 'Conflict', 409);
                case 422:
                    throw new APIError(data.message || 'Validation Error', 422);
                case 500:
                    throw new APIError(data.message || 'Internal Server Error', 500);
                default:
                    throw new APIError(data.message || 'An error occurred', response.status);
            }
        }

        return { data, status: response.status };
    } catch (error) {
        if (error instanceof APIError) {
            return {
                error: error.message,
                status: error.status
            };
        }
        return {
            error: error instanceof Error ? error.message : 'An error occurred',
            status: 500
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
    delete: <T>(endpoint: string) =>
        apiRequest<T>(endpoint, {
            method: 'DELETE',
        }),
}; 