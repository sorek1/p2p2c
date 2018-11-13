import fetchData from "./fetch-data";

export default async function(id) {
  const val = await fetchData(`item/${id}`);
  if (val) {
    return transform(val);
  } else {
    return null;
  }
}

export function transform(val) {
  return {
    id: val.id,
    url: val.url,
    user: val.by,
    // time is seconds since epoch, not ms
    date: new Date(val.time * 1000),
    // sometimes `kids` is `undefined`
    comments: val.kids || [],
    commentsCount: val.descendants,
    score: val.score,
    title: val.title
  };
}
