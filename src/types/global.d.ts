interface Window {
  __token__: string;
}

type PostData = {
  id: string,
  author: string,
  title: string,
  downs: number,
  ups: number,
  preview: Preview,
  created_utc: number,
  postId: string,
  subreddit: string,
}

type Preview = {
  images: [{
    source: {
      url: string,
    }
  }]
}
