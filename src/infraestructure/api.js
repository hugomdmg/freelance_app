class API {
    adress = process.env.URL

    async get(url) {
        try {
            const res = await fetch(this.adress + url);
    
            if (!res.ok) {
                throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
            }
    
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error in GET request:", error.message);
            throw error;
        }
    }
    



    async post(url, data) {
        try {
            const res = await fetch(this.adress + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Error ${res.status}: ${errorText}`);
            }
    
            const response = await res.json();
            return response;
    
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
            return { error: error.message };
        }
    }
    
}

export default API