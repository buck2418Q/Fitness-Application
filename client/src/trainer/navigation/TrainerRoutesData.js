export const RoutesData = [
    {
        title: "Dashboard",
        icon: "🏠",
        path: "/trainer/dashboard",
    },

    {
        title: "Plans",
        icon: "🤝",
        path: "/trainer/plans",
        children: [
            { title: "Yoga Plans", path: "/trainer/plans", icon: "🤝", },
            { title: "XYZ Plans", path: "/trainer/plans", icon: "🤝", },
        ],
    },
    {
        title: "Settings",
        icon: "⚙️",
        path: "/settings",
    },
];
