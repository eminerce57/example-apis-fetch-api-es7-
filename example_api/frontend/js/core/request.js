class Request {
    async get(url) {
        const response = await fetch(url, {
            method: 'GET',
            redirect: 'follow'
        })
        const data = await response.json()
        return data;
    }

    async post(url, _data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await response.json()
        return data;
    }

    async delete(url) {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }

    async put(url, _data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await response.json()
        return data;
    }
}

