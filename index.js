// This script will convert all PNG files in a folder and its subfolders to WebP.
// It will also convert the PNG files to sRGB color space before converting them to WebP.
// It requires ImageMagick and cwebp to be installed on your system.
// https://imagemagick.org/index.php
// https://developers.google.com/speed/webp/docs/cwebp
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Set the source and target folders
const sourceFolder = path.join(__dirname, "images");
const targetFolder = path.join(__dirname, "images");

// Get all PNG files in the source folder and its subfolders using a recursive function (walkSync)
// filter them using the filter method (endsWith) to get only the PNG files (filter) and not the other files (like .DS_Store)
const walkSync = function (dir, filelist = []) {
  fs.readdirSync(dir).forEach((file) => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
    return filelist;
  });
  return filelist;
};

const pngFiles = walkSync(sourceFolder).filter((file) => file.endsWith(".png"));

// Loop through the PNG files and convert them to WebP
pngFiles.forEach((file) => {
  const sourcePath = file;
  const targetPath = file
    .replace(sourceFolder, targetFolder)
    .replace(".png", ".webp");
  execSync(`convert ${sourcePath} -colorspace sRGB ${sourcePath}`);
  execSync(`cwebp ${sourcePath} -q 80 -o ${targetPath}`);
  console.log(`Converted ${file} to ${targetPath}`);
});
