import { $authHost } from ".";

export const createType = async (type: string) => {
  const { data } = await $authHost.post("api/type", {
    type,
  });
  return data;
};
