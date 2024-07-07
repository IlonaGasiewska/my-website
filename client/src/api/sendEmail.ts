import axios from 'axios';

export const sendEmail = async (form: any) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_API_URL}/send-email`,
      form,
    );
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
