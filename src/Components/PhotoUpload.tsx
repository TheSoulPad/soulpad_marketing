import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  CircularProgress,
  LinearProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTheme } from "../hooks/useTheme";
import aboutTheme from "../styles/aboutTheme/comps";
import { uploadPhotos } from "../services/photoUploadService";

interface PhotoUploadProps {
  themeType: string;
  onImagesChange: (images: File[]) => void;
  maxImages?: number;
  onUploadComplete?: (urls: string[], publicIds: string[]) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  themeType,
  onImagesChange,
  maxImages = 5,
  onUploadComplete,
}) => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [uploadedPublicIds, setUploadedPublicIds] = useState<string[]>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  // Use theme hook like CustomCard
  const themeInfoStyles = useTheme(themeType);
  const [buttonTheme, setButtonTheme] = useState(
    themeInfoStyles.Button || aboutTheme.Button,
  );
  const [cardTheme, setCardTheme] = useState(
    themeInfoStyles.Card || aboutTheme.Card,
  );

  // Update theme state when themeType changes
  useEffect(() => {
    setButtonTheme(themeInfoStyles.Button || aboutTheme.Button);
    setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
  }, [themeInfoStyles, themeType]);

  // Update previews when images change
  useEffect(() => {
    // Clean up old preview URLs to prevent memory leaks
    previews.forEach((preview) => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    });

    // Create new preview URLs
    const newPreviews = images.map((image) => URL.createObjectURL(image));
    setPreviews(newPreviews);

    // Notify parent component about image changes
    onImagesChange(images);

    // Cleanup function to revoke URLs when component unmounts or images change
    return () => {
      newPreviews.forEach((preview) => {
        if (preview.startsWith("blob:")) {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, [images, onImagesChange]);

  const validateFile = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      setError(
        `File "${file.name}" is not supported. Please upload JPG, JPEG, or PNG images only.`,
      );
      return false;
    }

    // Optional: Check file size (e.g., limit to 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError(`File "${file.name}" is too large. Maximum size is 5MB.`);
      return false;
    }

    return true;
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    // Clear previous errors
    setError("");

    // Check if adding these files would exceed the maximum
    if (images.length + fileList.length > maxImages) {
      setError(`You can only upload a maximum of ${maxImages} images.`);
      return;
    }

    const newFiles: File[] = [];

    // Validate each file
    Array.from(fileList).forEach((file) => {
      if (validateFile(file)) {
        newFiles.push(file);
      }
    });

    if (newFiles.length > 0) {
      setImages((prevImages) => [...prevImages, ...newFiles]);
    }

    // Reset the input value so the same file can be selected again if removed
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Handle form submission to upload images
  const handleUpload = async () => {
    if (!images.length) {
      setError("Please select at least one image to upload.");
      return;
    }

    try {
      setUploading(true);
      setUploadProgress(0);

      const response = await uploadPhotos(images, (progress) => {
        setUploadProgress(progress);
      });

      if (response.success && response.urls) {
        setUploadedUrls(response.urls);

        // Store public IDs if they are provided
        if (response.publicIds) {
          setUploadedPublicIds(response.publicIds);
        }

        setShowSuccessAlert(true);

        // Notify parent component if callback exists
        if (onUploadComplete) {
          onUploadComplete(response.urls, response.publicIds || []);
        }
      } else {
        setError(response.message || "Upload failed");
      }
    } catch (err) {
      setError("An unexpected error occurred during upload.");
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleCloseAlert = () => {
    setShowSuccessAlert(false);
  };

  const uploadButtonStyle = {
    ...buttonTheme.primary,
    marginTop: "16px",
    maxWidth: "200px",
    fontSize: "0.875rem",
  };

  const submitButtonStyle = {
    ...buttonTheme.secondary,
    marginTop: "16px",
    marginLeft: "8px",
    width: "unset",
  };

  const previewContainerStyle = {
    ...cardTheme,
    padding: "16px",
    marginTop: "16px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  };

  const previewStyle = {
    width: "100%",
    // height: "120px",
    objectFit: "cover" as const,
    borderRadius: "4px",
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent={"center"}>
        <input
          accept="image/jpeg,image/jpg,image/png"
          style={{ display: "none" }}
          id="photo-upload-input"
          multiple
          type="file"
          onChange={handleImageUpload}
          disabled={images.length >= maxImages || uploading}
        />
        <label htmlFor="photo-upload-input">
          <Button
            component="span"
            startIcon={<AddPhotoAlternateIcon />}
            sx={uploadButtonStyle}
            disabled={images.length >= maxImages || uploading}
          >
            {images.length === 0
              ? "Select Photos"
              : `Select More (${images.length}/${maxImages})`}
          </Button>
        </label>

        {images.length > 0 && (
          <Button
            startIcon={
              uploading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <CloudUploadIcon />
              )
            }
            sx={submitButtonStyle}
            onClick={handleUpload}
            disabled={uploading || !images.length}
          >
            {uploading ? "Uploading..." : "Upload Photos"}
          </Button>
        )}
      </Box>

      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}

      {uploading && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Uploading: {uploadProgress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={uploadProgress}
            sx={{ height: 8, borderRadius: 4 }}
          />
        </Box>
      )}

      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully uploaded {uploadedUrls.length} photos!
        </Alert>
      </Snackbar>

      {images.length > 0 && (
        <Box sx={previewContainerStyle}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: cardTheme.color || "#000",
              fontFamily: cardTheme.fontFamily,
            }}
          >
            Your Photos ({images.length}/{maxImages})
          </Typography>

          <Grid container spacing={2}>
            {previews.map((preview, index) => (
              <Grid key={index} sx={{ padding: 1 }}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    maxWidth: "300px",
                    width: "100%",
                  }}
                >
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    style={previewStyle}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      padding: "4px",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    onClick={() => removeImage(index)}
                    size="small"
                    disabled={uploading}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default PhotoUpload;
