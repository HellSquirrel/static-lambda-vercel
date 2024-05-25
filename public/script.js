const fetchReq = async () => {
    const response = await fetch('/api/test')
    const data = await response.text()
    console.log(data)
}

fetchReq()