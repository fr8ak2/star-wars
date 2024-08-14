import { Character, Sort } from '@/types'

export const sortList = (
    data: Character[],
    sort?: Sort,
    search?: string,
): Character[] => {
    let list = data.filter((item) =>
        item.name.toLowerCase().includes(search ?? ''.toLowerCase()),
    )

    if (sort === 'asc') {
        list = list.sort((a, b) => (a?.name ?? '').localeCompare(b?.name ?? ''))
    }

    if (sort === 'desc') {
        list = list.sort((a, b) => (b?.name ?? '').localeCompare(a?.name ?? ''))
    }

    return list
}
