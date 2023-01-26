# PNG to WebP Converter Script

This script is a Node.js script that converts all PNG files in a folder and its subfolders to the WebP image format. It uses the `child_process.execSync()` method to execute command-line commands for the conversion process.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [ImageMagick](https://imagemagick.org/)
- [cwebp](https://developers.google.com/speed/webp/docs/cwebp)

## Installation

1. Clone the repository or download the script
2. Install the dependencies by running `npm install`
3. Set the source and target folder path in the script.

## Usage

`node index.js `

## Configuration

You can configure the script by setting the source and target folder path in the script.

`const sourceFolder = path.join(**dirname, "images");`

`const targetFolder = path.join(**dirname, "images");`

## Tips

- You can modify the script to change the quality of the output WebP images by changing the `-q` value in the cwebp command.
- You can use the script to convert all PNG images in a specific folder and its subfolders.
- The script will also convert the PNG files to sRGB color space before converting them to WebP, you can modify the command if you want to use other color space.

## Support

If you have any issues or questions, please open an issue or contact me.

## Contribution

Feel free to submit pull requests and improve the script.

## License

This script is available under the MIT license. See the LICENSE file for more information.

Enjoy!
