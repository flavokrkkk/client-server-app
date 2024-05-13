import { $host } from ".";

export const fetchAsyncDeviceById = async (id: string) => {
  try {
    const { data } = await $host.get(`api/device/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
