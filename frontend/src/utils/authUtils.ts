// author: Parth Patel
export const getToken = () => {
    const token = localStorage.getItem('token');
    console.log("Token:::",token);
    return token || null;
  };