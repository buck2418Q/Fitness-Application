
export const RoutesData = [
    {
        title: "Dashboard",
        icon: "🏠",
        path: "/admin/dashboard",
    },
    {
        title: "Users",
        icon: "👨‍💼",
        path: "/admin/user",
    },
    {
        title: "Plans",
        icon: "🤝",
        path: "/admin/plans",
        children: [
            { title: "Yoga Plans", path: "/admin/plans", icon: "🤝", },
            { title: "XYZ Plans", path: "/admin/plans", icon: "🤝", },
        ],
    },
    {
        title: "Settings",
        icon: "⚙️",
        path: "/settings",
    },
];
