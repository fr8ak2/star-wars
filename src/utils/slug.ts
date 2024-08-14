export const generateSlug = (x: string) => {
    return x
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
}
