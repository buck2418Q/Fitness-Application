export const RoutesData = [
    {
        title: "Dashboard",
        icon: "material-symbols:home-rounded",
        path: "/trainer/dashboard",
    },

    {
        title: "Plans",
        icon: "ic:baseline-discount",
        path: "/trainer/plans",
        children: [
            { title: "Yoga Plans", path: "/trainer/plans", icon: "mdi:cloud-discount", },
            { title: "XYZ Plans", path: "/trainer/plans", icon: "mdi:cart-discount", },
        ],
    },
    {
        title: "Workout",
        icon: "material-symbols:exercise",
        path: "/trainer/workout",
    },
    {
        title: "Settings",
        icon: "material-symbols:settings-rounded",
        path: "/settings",
    },
];
