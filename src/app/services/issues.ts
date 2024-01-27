const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

export const fetchIssues = async ({
  pageParam = 1,
  searchText
}: {
  pageParam?: number;
  searchText: string;
}) => {
  return await fetch(`https://swapi.dev/api/people/?search=${searchText}&page=${pageParam}`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    })

    .then((res) => {
      console.log(res);
      const currentPage = Number(pageParam);
      const nextCursor = currentPage > 3 ? undefined : currentPage + 1;

      return {
        issues: res.results,
        nextCursor,
      };
    });
};
