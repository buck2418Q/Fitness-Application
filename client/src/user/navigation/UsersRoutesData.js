export const RoutesData = [
    {
        title: "Dashboard",
        icon: "🏠",
        path: "/user/dashboard",
    },

    {
        title: "Plans",
        icon: "🤝",
        path: "/user/plans",
        children: [
            { title: "Yoga Plans", path: "/user/plans", icon: "🤝", },
            { title: "XYZ Plans", path: "/user/plans", icon: "🤝", },
        ],
    },
    {
        title: "Categories",
        icon: "🏠",
        path: "/user/category",
    },
    {
        title: "Workout",
        icon: "🏠",
        path: "/user/workout",
    },
    {
        title: "Settings",
        icon: "⚙️",
        path: "/settings",
    },
];
