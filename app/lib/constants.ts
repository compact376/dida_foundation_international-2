export const menuItems = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About Us",
        path: "/about",
    },
    {
        label: "Programs",
        path: "/programs",
        subItems: [
            {
                label: "Global Islamic Research",
                path: "/programs/global-islamic-research",
            },
            {
                label: "Scouting Movement (SMIP)",
                path: "/programs/smip",
            },
        ],
    },
    {
        label: "Donate",
        path: "/donate",
    },

    {
        label: "Contact",
        path: "/contact",
    },

] as const;