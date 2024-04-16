const imageSize = {
    width: 500,
    height: 300,
};

export const ProjectsList = [
    {
        title: "E-commerce Platform",
        image: `${process.env.REACT_APP_IMAGE_PLACEHOLDER_URL}/seed/picsum/${imageSize.width}/${imageSize.height}`,
        date: "Apr 23, 2023",
        technologies: [
            "nextjs",
            "mysql",
            "html",
            "css",
            "javascript",
        ],
        description:
            "Developed a full-fledged e-commerce platform that allows users to browse products, add them to the cart, and complete the purchase process.",
        responsibilities:
            "Designed and implemented the backend using Django, integrated payment gateways, and ensured secure data storage with PostgreSQL.",
    },
    {
        title: "Inventory Management System",
        image: `${process.env.REACT_APP_IMAGE_PLACEHOLDER_URL}/seed/car/${imageSize.width}/${imageSize.height}`,
        date: "Jul 28, 2023",
        technologies: ["java", "mysql", "Angular"],
        description:
            "Built an inventory management system for a retail company to track stock levels, sales, and supplier information.",
        responsibilities:
            "Developed the backend APIs using Spring Boot, created a responsive frontend with Angular, and implemented authentication and authorization features.",
    },
    {
        title: "Chat Application",
        image: `${process.env.REACT_APP_IMAGE_PLACEHOLDER_URL}/seed/house/${imageSize.width}/${imageSize.height}`,
        date: "Jan 21, 2023",
        technologies: ["nodejs", "react", "mysql"],
        description:
            "Designed and developed a real-time chat application that enables users to communicate instantly.",
        responsibilities:
            "Implemented the backend using Node.js and Socket.io for real-time communication, built the frontend with React, and ensured data persistence with MongoDB.",
    },
];
