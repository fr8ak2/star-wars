interface LINK {
    id: string
    label: string
}

const routes = {
    HOME: {
        title: 'Home',
        route: '/',
    },
    CHARACTERS: {
        title: 'Characters',
        route: '/characters',
    },
}

export const links: LINK[] = Object.keys(routes)
    .filter((key) => key !== 'HOME')
    .map((key) => ({
        id: routes[key as keyof typeof routes].route,
        label: routes[key as keyof typeof routes].title,
    }))
