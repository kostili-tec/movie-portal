const loginRegex = /^[a-zA-Z0-9]{4,10}$/;
const passwordRegex = /^[a-zA-Z0-9@\$!%*?#]{4,10}$/; // eslint-disable-line

export const isValidLogin = (login: string) => loginRegex.test(login);
export const isValidPassword = (password: string) => passwordRegex.test(password);
export const isValidApiKey = (apiKey: string) => Boolean(apiKey);
