import React from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";
export var testComments = [
    {
        personName: "Alice Johnson",
        profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
        date: "2025-09-03",
        comment: "Your profile looks fantastic! Great job.",
    },
    {
        personName: "Brian Smith",
        profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
        date: "2025-09-05",
        comment: "Really impressive profile, keep it up!",
    },
    {
        personName: "Catherine Lee",
        profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
        date: "2025-09-07",
        comment: "Love the details on your profile. Well done!",
    },
    {
        personName: "David Kim",
        profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
        date: "2025-09-09",
        comment: "Your profile is very inspiring!",
    },
    {
        personName: "Emily Clark",
        profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
        date: "2025-09-11",
        comment: "Such a professional looking profile!",
    },
    {
        personName: "Frank Turner",
        profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
        date: "2025-09-13",
        comment: "Great profile, very well presented.",
    },
    {
        personName: "Grace Miller",
        profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
        date: "2025-09-15",
        comment: "Your profile stands out in the best way!",
    },
    {
        personName: "Henry Adams",
        profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
        date: "2025-09-17",
        comment: "Really like your profile, very impressive.",
    },
    {
        personName: "Isabella Brown",
        profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
        date: "2025-09-19",
        comment: "Your profile is so well organized!",
    },
    {
        personName: "Jack Wilson",
        profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
        date: "2025-09-21",
        comment: "Awesome profile, keep up the great work!",
    },
];
export var TestComments = function (_a) {
    var _b = _a.comments, comments = _b === void 0 ? testComments : _b;
    return (React.createElement(Box, { className: "test-comments", sx: {
            maxWidth: 680,
            mx: "auto",
            maxHeight: 360,
            overflowY: "auto",
            px: 2,
        } },
        comments.map(function (c, i) { return (React.createElement(Box, { className: "test-comment", key: i, sx: { display: "flex", gap: 2, py: 2 } },
            React.createElement(Avatar, { alt: c.personName, src: c.profilePicture }),
            React.createElement(Box, { sx: { flex: 1 } },
                React.createElement(Box, { sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                    } },
                    React.createElement(Typography, { variant: "subtitle1", sx: { fontWeight: 600, fontSize: "1.1rem" } }, c.personName),
                    React.createElement(Typography, { variant: "caption", color: "text.secondary" }, c.date)),
                React.createElement(Typography, { variant: "body2", sx: { mt: 0.5, fontSize: "0.95rem" } }, c.comment)))); }),
        React.createElement(Divider, { sx: { mt: 1 } })));
};
export default testComments;
