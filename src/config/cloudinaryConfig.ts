/**
 * Cloudinary Configuration
 *
 * This file contains configuration settings for Cloudinary integration.
 * Values are loaded from environment variables with fallbacks for development.
 */

// Cloudinary configuration
export const cloudinaryConfig = {
  cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "dd4qvmhqx",
  apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY || "195413651933294",
  apiSecret:
    process.env.REACT_APP_CLOUDINARY_API_SECRET ||
    "fLlQ63Z-ap4NNnZKIxmfVkhSddM",
  uploadPreset:
    process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "soulpad_uploads",
};

/**
 * Get Cloudinary Upload URL
 *
 * Returns the URL for uploading images to Cloudinary via the REST API
 */
export const getCloudinaryUploadUrl = (): string => {
  return `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`;
};

/**
 * Build Cloudinary Image URL
 *
 * Utility function to create a URL for a Cloudinary-hosted image with transformations
 *
 * @param publicId - The public ID of the uploaded image
 * @param transformations - Optional transformations string (e.g., "w_300,h_300,c_fill")
 * @returns The complete image URL
 */
export const buildCloudinaryUrl = (
  publicId: string,
  transformations = "",
): string => {
  if (!publicId) return "";

  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;

  if (transformations) {
    return `${baseUrl}/${transformations}/${publicId}`;
  }

  return `${baseUrl}/${publicId}`;
};
