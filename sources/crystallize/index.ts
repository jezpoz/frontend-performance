import Axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { getPageContentQuery } from './queries';

const crystallizeApi: AxiosInstance = Axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: 'https://api.crystallize.com/crystallize-assignment',
});

export async function getPageContent() {
  try {
    const response: AxiosResponse = await crystallizeApi.post('/catalogue', {query: getPageContentQuery});
    if (response.data) {
      // data.data because axios encapsulates and graphql response does
      return response.data?.data?.catalogue;
    }
  } catch (err) {
    if (Axios.isAxiosError(err)) {
      console.error("Could not fetch page content", err);
    } else {
      console.error("Some other error", err);
    }
  }
}