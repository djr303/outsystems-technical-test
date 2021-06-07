const API_ENDPOINT =
  "https://outsystems78.outsystemscloud.com/PhotoAlbum/rest/album";

const FETCH_CONFIG: RequestInit = {
  method: "GET",
  cache: "no-cache",
  referrerPolicy: "unsafe-url",
};

const fetchCreator: (base: string, id?: string) => Promise<any> = async (
  base,
  id = ""
) => {
  const res = await fetch(`${API_ENDPOINT}/${base}/${id}`, { ...FETCH_CONFIG });
  return await res.json();
};

export const all = async () => {
  return await fetchCreator("all");
};

export const folder = async (folderName: string) => {
  return await fetchCreator("folder", folderName);
};

export const artist = async (artistId: string) => {
  return await fetchCreator("artist", artistId);
};

export const folders = async () => {
  return await fetchCreator("folders");
};
