
export const RoutesData = [
    {
        title: "Dashboard",
        icon: "🏠",
        path: "/groot/dashboard",
    },
    
    {
        title: "Plans",
        icon: "🤝",
        path: "/groot/plans",
        children: [
            { title: "Yoga Plans", path: "/groot/plans", icon: "🤝", },
            { title: "XYZ Plans", path: "/groot/plans", icon: "🤝", },
        ],
    },
    {
        title: "Settings",
        icon: "⚙️",
        path: "/settings",
    },
];
