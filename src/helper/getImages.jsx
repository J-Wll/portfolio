// Grabs the amount of images with a set name from assets, for use with the carousel on project pages
const BASE_PATH = import.meta.env.VITE_BASE_PATH || "";
export default function getImages(assetName = "flash", assetCount = 3, fileType = ".webp", assetPath = BASE_PATH) {
    let imgs = [];
    for (let i = 1; i <= assetCount; i++) {
        console.log(`${assetPath}${assetName}${i}${fileType}`)
        imgs.push(`${assetPath}${assetName}${i}${fileType}`)
    }
    console.log(imgs)
    return imgs
}