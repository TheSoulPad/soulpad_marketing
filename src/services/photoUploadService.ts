/**
 * Photo Upload Service
 * Handles API requests to upload images to Cloudinary
 */
import {
  cloudinaryConfig,
  getCloudinaryUploadUrl,
  buildCloudinaryUrl,
} from "../config/cloudinaryConfig";

// Define the response type for our upload
interface UploadResponse {
  success: boolean;
  message: string;
  urls?: string[];
  publicIds?: string[];
  errors?: string[];
}

// Define the Cloudinary API response structure
interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
}

// Define a progress callback type for tracking upload progress
type ProgressCallback = (progress: number) => void;

/**
 * Uploads multiple files to Cloudinary
 * @param files Array of files to upload
 * @param onProgress Optional callback to track upload progress
 * @returns Promise with upload response
 */
export const uploadPhotos = async (
  files: File[],
  onProgress?: ProgressCallback,
): Promise<UploadResponse> => {
  // If no files, return early
  if (!files.length) {
    return {
      success: false,
      message: "No files provided",
    };
  }

  try {
    // Track overall progress across all files
    let totalProgress = 0;
    const fileCount = files.length;

    // Create array of upload promises
    const uploadPromises = files.map((file, index) => {
      return new Promise<CloudinaryUploadResponse>((resolve, reject) => {
        // Create FormData for this specific file
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", cloudinaryConfig.uploadPreset);

        // Optional: add these if using signed uploads instead of unsigned upload presets
        // formData.append('api_key', cloudinaryConfig.apiKey);
        // formData.append('timestamp', String(Date.now() / 1000));
        // formData.append('signature', '...'); // Would need to generate a signature

        // Create XHR request to track progress
        const xhr = new XMLHttpRequest();
        xhr.open("POST", getCloudinaryUploadUrl());

        // Track upload progress
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable && onProgress) {
            // Calculate progress for this file
            const fileProgress = (event.loaded / event.total) * 100;

            // Update total progress across all files
            // Each file contributes proportionally to the total progress
            totalProgress = (index * 100 + fileProgress) / fileCount;
            onProgress(Math.min(Math.round(totalProgress), 99));
          }
        };

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the Cloudinary response
            const response = JSON.parse(
              xhr.responseText,
            ) as CloudinaryUploadResponse;
            resolve(response);
          } else {
            reject(new Error(`Upload failed with status ${xhr.status}`));
          }
        };

        xhr.onerror = () => {
          reject(new Error("Network error during upload"));
        };

        xhr.send(formData);
      });
    });

    // Wait for all uploads to complete
    const responses = await Promise.all(uploadPromises);

    // Set final progress to 100%
    if (onProgress) {
      onProgress(100);
    }

    // Extract the URLs and public IDs from the responses
    const urls = responses.map((response) => response.secure_url);
    const publicIds = responses.map((response) => response.public_id);

    return {
      success: true,
      message: `Successfully uploaded ${files.length} files to Cloudinary`,
      urls,
      publicIds,
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      success: false,
      message: "Upload to Cloudinary failed",
      errors: [(error as Error).message],
    };
  }
};

/**
 * Deletes photos from Cloudinary by public ID
 * Note: This requires proper authentication with your Cloudinary API key and secret
 * @param publicIds Array of Cloudinary public IDs to delete
 */
export const deletePhotos = async (
  publicIds: string[],
): Promise<UploadResponse> => {
  if (!publicIds.length) {
    return {
      success: false,
      message: "No photo IDs provided",
    };
  }

  try {
    // Note: Deleting resources from Cloudinary requires admin/signed API access
    // You would typically do this from your server, not directly from the client
    // for security reasons. This is a simplified example.

    // For demonstration, we'll use a server endpoint that would handle the deletion
    // In a real implementation, you'd replace this with your actual server endpoint
    const response = await fetch("/api/delete-cloudinary-images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicIds }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete images");
    }

    const result = await response.json();

    return {
      success: true,
      message: `Successfully deleted ${publicIds.length} photos`,
    };
  } catch (error) {
    console.error("Delete error:", error);
    return {
      success: false,
      message: "Failed to delete photos",
      errors: [(error as Error).message],
    };
  }

  // Fallback for development without a real backend
  // For development purposes only, remove in production
  /*
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: `Successfully deleted ${publicIds.length} photos`,
      });
    }, 500);
  });
  */
};
