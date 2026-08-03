import * as React from "react";
import { navigate } from "gatsby";

const GalleryRedirect: React.FC = () => {
  React.useEffect(() => {
    navigate("/HowSoulPadWorks", { replace: true });
  }, []);

  return null;
};

export default GalleryRedirect;
