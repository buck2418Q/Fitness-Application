import multer from "multer";
import fs from "fs";
import path from "path";

export const createMulterStorage = (folderBase) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            // Extract trainer ID from the request body
            const trainerId = req.body.trainerId;
            if (!trainerId) {
                return cb(new Error("Trainer ID is required in the request body."));
            }

            // Create folder structure: uploads/trainer-workout/{trainerId}
            const folderPath = `${folderBase}/${trainerId}/`;
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            }
            cb(null, folderPath);
        },
        filename: (req, file, cb) => {
            // Use the workout title as the filename
            const workoutTitle = req.body.title?.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
            if (!workoutTitle) {
                return cb(new Error("Workout title is required in the request body."));
            }

            const fileExt = path.extname(file.originalname);
            const fileName = `${workoutTitle}${fileExt}`;
            cb(null, fileName);
        },
    });
};

export const createMulterConfig = (folderBase, allowedExtensions, maxFileSizeMB) => {
    return multer({
        storage: createMulterStorage(folderBase),
        fileFilter: (req, file, cb) => {
            const fileExt = path.extname(file.originalname).toLowerCase();
            if (allowedExtensions.includes(fileExt)) {
                cb(null, true);
            } else {
                cb(new Error(`Unsupported file type: ${fileExt}`));
            }
        },
        limits: { fileSize: maxFileSizeMB * 1024 * 1024 },
    });
};