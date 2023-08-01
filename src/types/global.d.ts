interface Window {
  __token__: string;
}

type PostData = {
  id?: string,
  author: string,
  title: string,
  downs: number,
  ups: number,
  preview: Preview,
  created_utc: number,
}

type Preview = {
  images: [{
    source: {
      url: string,
    }
  }]
}
