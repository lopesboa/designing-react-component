import axios from 'axios';
import useSWR from 'swr';

export const api = axios.create({
  baseURL: 'http://localhost:4000',
})

export function responseApi() {
  const {data, error} = useSWR('http://localhost:4000/speakers', fetcher);

  if(error) return <div>failed to load</div>
  if(!data) return <div>loading...</div>

  return data
}