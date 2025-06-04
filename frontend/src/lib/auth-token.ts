import { cookies } from 'next/headers';

export const getAuthToken = async (): Promise<string | null> => {
  const URL = 'http://local.tools.ngahealthcare.com:8000/api/token/';
  const username = process.env.PSWRD;
  const password = process.env.USR;
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok && response.json) {
      const data = await response.json();
      if (data.token) {
        const expires = new Date(Date.now() + 10 + 1000);

        (await cookies()).set('token', data.token, { expires, httpOnly: true });
        console.log(data.token);
        return data.token;
      } else {
        console.error('Failed to retrieve token:', data);
        return null;
      }
    } else {
      console.error('Failed to retrieve token:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};
