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
        title: "Settings",
        icon: "⚙️",
        path: "/settings",
    },
];
