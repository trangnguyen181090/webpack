//console.log('login loaded');

let login = (username, password) => {
    if (username !== 'admin' && password !== 'trang') {
        console.log('incorrect login');
    }
};

//login('admin1', 'trang1');

export { login }