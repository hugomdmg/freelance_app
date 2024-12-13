class API {
    adress = 'http://localhost:3001'


    get(url) {
        let response
        fetch(this.adress + url).then(res => {
            if (!res.ok) {
                throw new Error('fail to fetch')
            }
            return res.json()
        }).then(data => {
            response = data
        }).catch(error => {
            console.error(error)
        })
        return response
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