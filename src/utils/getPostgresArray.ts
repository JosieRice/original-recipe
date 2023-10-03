export const getPostgresArray = (array: string[]) => {
    return `{${array.map((item) => `"${item}"`).join(",")}}`;
};
