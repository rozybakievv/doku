const auth = async(email, password) => {
    const body = {email: email, password: password};

    const response = await fetch("/api/users/login/", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201) {
        const data = await response.json();
        /* lecontext.setToken(lecontext.token = data.token); */
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data.token);
        console.log(data.id);
    } else {
        alert(response.error);
    }
}

export default auth