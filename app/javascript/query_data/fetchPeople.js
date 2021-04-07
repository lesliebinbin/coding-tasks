export default async (page, callback) => {
  const response = await fetch(`/people?page=${page}`);
  const { total_count, data } = await response.json();
  callback({ total_count, data, page });
};
