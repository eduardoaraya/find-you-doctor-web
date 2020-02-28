export default () => {
    return {
        authStore:(doctor,token) => {
            localStorage.setItem('_token',token);
            localStorage.setItem('_doctor',JSON.stringify(doctor));
        },
        getUser:async () => {
            return JSON.parse(localStorage.getItem('_doctor'));
        }
    }
}   