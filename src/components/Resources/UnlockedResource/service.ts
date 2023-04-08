import { httpPostRequest } from "../../../http/Client";

const DOWNLOAD_EBOOK_URL = "/resource/ebook/download";

export const doDownloadEbook = async (ebookId: string): Promise<Array<any>> => {
  console.log(ebookId);
  return (
    (await httpPostRequest(
      DOWNLOAD_EBOOK_URL,
      { ebookId: ebookId },
      {
        Accept: "application/octet-stream",
        Authorization: localStorage.getItem("token"),
      },
      "blob"
    )) ?? []
  );
};
