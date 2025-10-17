import React from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";

export const testComments = [
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

interface Comment {
  personName: string;
  profilePicture: string;
  date: string;
  comment: string;
}

export const TestComments: React.FC<{ comments?: Comment[] }> = ({
  comments = testComments,
}) => {
  return (
    <Box
      className="test-comments"
      sx={{
        maxWidth: 680,
        mx: "auto",
        maxHeight: 360,
        overflowY: "auto",
        px: 2,
      }}
    >
      {comments.map((c, i) => (
        <Box
          className="test-comment"
          key={i}
          sx={{ display: "flex", gap: 2, py: 2 }}
        >
          <Avatar alt={c.personName} src={c.profilePicture} />
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, fontSize: "1.1rem" }}
              >
                {c.personName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {c.date}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 0.5, fontSize: "0.95rem" }}>
              {c.comment}
            </Typography>
          </Box>
        </Box>
      ))}
      <Divider sx={{ mt: 1 }} />
    </Box>
  );
};

export default testComments;
