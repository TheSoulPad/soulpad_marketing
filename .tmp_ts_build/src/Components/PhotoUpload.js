var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, IconButton, CircularProgress, LinearProgress, Alert, Snackbar, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTheme } from "../hooks/useTheme";
import aboutTheme from "../styles/aboutTheme/comps";
import { uploadPhotos } from "../services/photoUploadService";
var PhotoUpload = function (_a) {
    var themeType = _a.themeType, onImagesChange = _a.onImagesChange, _b = _a.maxImages, maxImages = _b === void 0 ? 5 : _b, onUploadComplete = _a.onUploadComplete;
    var _c = useState([]), images = _c[0], setImages = _c[1];
    var _d = useState([]), previews = _d[0], setPreviews = _d[1];
    var _e = useState(""), error = _e[0], setError = _e[1];
    var _f = useState(false), uploading = _f[0], setUploading = _f[1];
    var _g = useState(0), uploadProgress = _g[0], setUploadProgress = _g[1];
    var _h = useState([]), uploadedUrls = _h[0], setUploadedUrls = _h[1];
    var _j = useState([]), uploadedPublicIds = _j[0], setUploadedPublicIds = _j[1];
    var _k = useState(false), showSuccessAlert = _k[0], setShowSuccessAlert = _k[1];
    // Use theme hook like CustomCard
    var themeInfoStyles = useTheme(themeType);
    var _l = useState(themeInfoStyles.Button || aboutTheme.Button), buttonTheme = _l[0], setButtonTheme = _l[1];
    var _m = useState(themeInfoStyles.Card || aboutTheme.Card), cardTheme = _m[0], setCardTheme = _m[1];
    // Update theme state when themeType changes
    useEffect(function () {
        setButtonTheme(themeInfoStyles.Button || aboutTheme.Button);
        setCardTheme(themeInfoStyles.Card || aboutTheme.Card);
    }, [themeInfoStyles, themeType]);
    // Update previews when images change
    useEffect(function () {
        // Clean up old preview URLs to prevent memory leaks
        previews.forEach(function (preview) {
            if (preview.startsWith("blob:")) {
                URL.revokeObjectURL(preview);
            }
        });
        // Create new preview URLs
        var newPreviews = images.map(function (image) { return URL.createObjectURL(image); });
        setPreviews(newPreviews);
        // Notify parent component about image changes
        onImagesChange(images);
        // Cleanup function to revoke URLs when component unmounts or images change
        return function () {
            newPreviews.forEach(function (preview) {
                if (preview.startsWith("blob:")) {
                    URL.revokeObjectURL(preview);
                }
            });
        };
    }, [images, onImagesChange]);
    var validateFile = function (file) {
        var validTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!validTypes.includes(file.type)) {
            setError("File \"".concat(file.name, "\" is not supported. Please upload JPG, JPEG, or PNG images only."));
            return false;
        }
        // Optional: Check file size (e.g., limit to 5MB)
        var maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            setError("File \"".concat(file.name, "\" is too large. Maximum size is 5MB."));
            return false;
        }
        return true;
    };
    var handleImageUpload = function (e) {
        var fileList = e.target.files;
        if (!fileList)
            return;
        // Clear previous errors
        setError("");
        // Check if adding these files would exceed the maximum
        if (images.length + fileList.length > maxImages) {
            setError("You can only upload a maximum of ".concat(maxImages, " images."));
            return;
        }
        var newFiles = [];
        // Validate each file
        Array.from(fileList).forEach(function (file) {
            if (validateFile(file)) {
                newFiles.push(file);
            }
        });
        if (newFiles.length > 0) {
            setImages(function (prevImages) { return __spreadArray(__spreadArray([], prevImages, true), newFiles, true); });
        }
        // Reset the input value so the same file can be selected again if removed
        e.target.value = "";
    };
    var removeImage = function (index) {
        setImages(function (prevImages) { return prevImages.filter(function (_, i) { return i !== index; }); });
    };
    // Handle form submission to upload images
    var handleUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!images.length) {
                        setError("Please select at least one image to upload.");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    setUploading(true);
                    setUploadProgress(0);
                    return [4 /*yield*/, uploadPhotos(images, function (progress) {
                            setUploadProgress(progress);
                        })];
                case 2:
                    response = _a.sent();
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
                    }
                    else {
                        setError(response.message || "Upload failed");
                    }
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError("An unexpected error occurred during upload.");
                    console.error("Upload error:", err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setUploading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleCloseAlert = function () {
        setShowSuccessAlert(false);
    };
    var uploadButtonStyle = __assign(__assign({}, buttonTheme.primary), { marginTop: "16px", maxWidth: "200px", fontSize: "0.875rem" });
    var submitButtonStyle = __assign(__assign({}, buttonTheme.secondary), { marginTop: "16px", marginLeft: "8px", width: "unset" });
    var previewContainerStyle = __assign(__assign({}, cardTheme), { padding: "16px", marginTop: "16px", display: "flex", flexDirection: "column", alignItems: "center" });
    var previewStyle = {
        width: "100%",
        // height: "120px",
        objectFit: "cover",
        borderRadius: "4px",
    };
    return (React.createElement(Box, null,
        React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center" },
            React.createElement("input", { accept: "image/jpeg,image/jpg,image/png", style: { display: "none" }, id: "photo-upload-input", multiple: true, type: "file", onChange: handleImageUpload, disabled: images.length >= maxImages || uploading }),
            React.createElement("label", { htmlFor: "photo-upload-input" },
                React.createElement(Button, { component: "span", startIcon: React.createElement(AddPhotoAlternateIcon, null), sx: uploadButtonStyle, disabled: images.length >= maxImages || uploading }, images.length === 0
                    ? "Select Photos"
                    : "Select More (".concat(images.length, "/").concat(maxImages, ")"))),
            images.length > 0 && (React.createElement(Button, { startIcon: uploading ? (React.createElement(CircularProgress, { size: 20, color: "inherit" })) : (React.createElement(CloudUploadIcon, null)), sx: submitButtonStyle, onClick: handleUpload, disabled: uploading || !images.length }, uploading ? "Uploading..." : "Upload Photos"))),
        error && (React.createElement(Typography, { color: "error", variant: "body2", sx: { mt: 1 } }, error)),
        uploading && (React.createElement(Box, { sx: { width: "100%", mt: 2 } },
            React.createElement(Typography, { variant: "body2", sx: { mb: 1 } },
                "Uploading: ",
                uploadProgress,
                "%"),
            React.createElement(LinearProgress, { variant: "determinate", value: uploadProgress, sx: { height: 8, borderRadius: 4 } }))),
        React.createElement(Snackbar, { open: showSuccessAlert, autoHideDuration: 6000, onClose: handleCloseAlert, anchorOrigin: { vertical: "bottom", horizontal: "center" } },
            React.createElement(Alert, { onClose: handleCloseAlert, severity: "success", sx: { width: "100%" } },
                "Successfully uploaded ",
                uploadedUrls.length,
                " photos!")),
        images.length > 0 && (React.createElement(Box, { sx: previewContainerStyle },
            React.createElement(Typography, { variant: "h6", sx: {
                    mb: 2,
                    color: cardTheme.color || "#000",
                    fontFamily: cardTheme.fontFamily,
                } },
                "Your Photos (",
                images.length,
                "/",
                maxImages,
                ")"),
            React.createElement(Grid, { container: true, spacing: 2 }, previews.map(function (preview, index) { return (React.createElement(Grid, { key: index, sx: { padding: 1 } },
                React.createElement(Box, { sx: {
                        position: "relative",
                        borderRadius: "4px",
                        overflow: "hidden",
                        maxWidth: "300px",
                        width: "100%",
                    } },
                    React.createElement("img", { src: preview, alt: "Preview ".concat(index + 1), style: previewStyle }),
                    React.createElement(IconButton, { sx: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            color: "#fff",
                            padding: "4px",
                            "&:hover": {
                                backgroundColor: "rgba(0,0,0,0.7)",
                            },
                        }, onClick: function () { return removeImage(index); }, size: "small", disabled: uploading },
                        React.createElement(DeleteIcon, { fontSize: "small" }))))); }))))));
};
export default PhotoUpload;
