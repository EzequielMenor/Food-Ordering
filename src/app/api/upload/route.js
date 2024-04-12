// import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import uniqid from "uniqid";

export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    // upload the file
    const file = data.get("file");

    // const s3client = new S3Client({
    //   region: 'es',
    //   credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY,
    //     secretAccesKey: process.env.AWS_ACCES_KEY,
    //   }
    // })

    // const ext = file.name.split('.').slice(-1)[0];
    // const newFileName = uniqid() + '.' + ext

    // const chunks = [];
    // for await (const chunk of file.stream()) {
    //   chunks.push(chunk);
    // }
    // const buffer = Buffer.concat(chunks);

    // const bucket = 'nombre que hayas puesto';
    // await s3Client.send(new PutObjectCommand({
    //   bucket: bucket,
    //   Key: newFileName,
    //   ACL: 'public-read'
    //   ContentType: file.type
    //   Body: buffer,
    // }))

    // const link = 'https://'+bucket+'.s3.amazon.com'+newFileNmae
    // return Response.json(link);



  }
  return Response.json(true);
}

// minuto 3:42:18 aprox del video para nose que de amazon
