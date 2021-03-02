import { getImage } from "../../utils/formidable";
import { uploadImage } from "../../utils/cloudinary";
import prisma from "../../utils/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handle(req, res) {
  const imageUploaded = await getImage(req);

  const imageData = await uploadImage(imageUploaded.path);

  const result = await prisma.image.create({
    data: {
      publicId: imageData.public_id,
      format: imageData.format,
      version: imageData.version.toString(),
    },
  });

  res.json(result);
}
