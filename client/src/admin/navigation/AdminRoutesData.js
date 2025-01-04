
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
        title: "Trainer",
        icon: "🧘‍♀️",
        path: "/admin/trainer",
    },
    {
        title: "Workout",
        icon: "⛹️",
        path: "/admin/workout",
    },
    {
        title: "Plans",
        icon: "🤝",
        path: "/admin/plans",
        children: [
            { title: "Yoga Plans", path: "/admin/plans", icon: "🤝", },
            { title: "XYZ Plans", path: "/admin/dashboard", icon: "🙌", },
        ],
    },
    {
        title: "Settings",
        icon: "⚙️",
        path: "/settings",
    },
];
