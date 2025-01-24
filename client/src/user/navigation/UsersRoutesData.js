export const RoutesData = [
    {
        title: "Dashboard",
        icon: "material-symbols:home-rounded",
        path: "/user/dashboard",
    },

    {
        title: "Plans",
        icon: "ic:baseline-discount",
        path: "/user/plans",
        children: [
            { title: "Yoga Plans", path: "/user/plans", icon: "mdi:cloud-discount", },
            { title: "XYZ Plans", path: "/user/plans", icon: "mdi:cart-discount", },
        ],
    },
    {
        title: "Categories",
        icon: "ic:round-category",
        path: "/user/category",
    },
    {
        title: "Workout",
        icon: "material-symbols:exercise",
        path: "/user/workout",
    },
    {
        title: "Settings",
        icon: "material-symbols:settings-rounded",
        path: "/settings",
    },
];


{/* <Icon icon="line-md:home-alt-twotone" width="24" height="24" style={{ color: #000}} /> */ }