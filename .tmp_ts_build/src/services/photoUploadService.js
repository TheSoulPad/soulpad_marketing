var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Photo Upload Service
 * Handles API requests to upload images to Cloudinary
 */
import { cloudinaryConfig, getCloudinaryUploadUrl, } from "../config/cloudinaryConfig";
/**
 * Uploads multiple files to Cloudinary
 * @param files Array of files to upload
 * @param onProgress Optional callback to track upload progress
 * @returns Promise with upload response
 */
export var uploadPhotos = function (files, onProgress) { return __awaiter(void 0, void 0, void 0, function () {
    var totalProgress_1, fileCount_1, uploadPromises, responses, urls, publicIds, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // If no files, return early
                if (!files.length) {
                    return [2 /*return*/, {
                            success: false,
                            message: "No files provided",
                        }];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                totalProgress_1 = 0;
                fileCount_1 = files.length;
                uploadPromises = files.map(function (file, index) {
                    return new Promise(function (resolve, reject) {
                        // Create FormData for this specific file
                        var formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", cloudinaryConfig.uploadPreset);
                        // Optional: add these if using signed uploads instead of unsigned upload presets
                        // formData.append('api_key', cloudinaryConfig.apiKey);
                        // formData.append('timestamp', String(Date.now() / 1000));
                        // formData.append('signature', '...'); // Would need to generate a signature
                        // Create XHR request to track progress
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", getCloudinaryUploadUrl());
                        // Track upload progress
                        xhr.upload.onprogress = function (event) {
                            if (event.lengthComputable && onProgress) {
                                // Calculate progress for this file
                                var fileProgress = (event.loaded / event.total) * 100;
                                // Update total progress across all files
                                // Each file contributes proportionally to the total progress
                                totalProgress_1 = (index * 100 + fileProgress) / fileCount_1;
                                onProgress(Math.min(Math.round(totalProgress_1), 99));
                            }
                        };
                        xhr.onload = function () {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                // Parse the Cloudinary response
                                var response = JSON.parse(xhr.responseText);
                                resolve(response);
                            }
                            else {
                                reject(new Error("Upload failed with status ".concat(xhr.status)));
                            }
                        };
                        xhr.onerror = function () {
                            reject(new Error("Network error during upload"));
                        };
                        xhr.send(formData);
                    });
                });
                return [4 /*yield*/, Promise.all(uploadPromises)];
            case 2:
                responses = _a.sent();
                // Set final progress to 100%
                if (onProgress) {
                    onProgress(100);
                }
                urls = responses.map(function (response) { return response.secure_url; });
                publicIds = responses.map(function (response) { return response.public_id; });
                return [2 /*return*/, {
                        success: true,
                        message: "Successfully uploaded ".concat(files.length, " files to Cloudinary"),
                        urls: urls,
                        publicIds: publicIds,
                    }];
            case 3:
                error_1 = _a.sent();
                console.error("Upload error:", error_1);
                return [2 /*return*/, {
                        success: false,
                        message: "Upload to Cloudinary failed",
                        errors: [error_1.message],
                    }];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 * Deletes photos from Cloudinary by public ID
 * Note: This requires proper authentication with your Cloudinary API key and secret
 * @param publicIds Array of Cloudinary public IDs to delete
 */
export var deletePhotos = function (publicIds) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!publicIds.length) {
                    return [2 /*return*/, {
                            success: false,
                            message: "No photo IDs provided",
                        }];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("/api/delete-cloudinary-images", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ publicIds: publicIds }),
                    })];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Failed to delete images");
                }
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                return [2 /*return*/, {
                        success: true,
                        message: "Successfully deleted ".concat(publicIds.length, " photos"),
                    }];
            case 4:
                error_2 = _a.sent();
                console.error("Delete error:", error_2);
                return [2 /*return*/, {
                        success: false,
                        message: "Failed to delete photos",
                        errors: [error_2.message],
                    }];
            case 5: return [2 /*return*/];
        }
    });
}); };
