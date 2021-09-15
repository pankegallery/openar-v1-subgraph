import fs from 'fs'
import sjcl from 'sjcl'
import { utils } from "ethers";
import { customAlphabet } from "nanoid";

export const nanoidCustom16 = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  16
);

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function sha256FromFile(pathToFile: string, chunkSize: number): Promise<string> {
  const hash = new sjcl.hash.sha256()

  const readStream = fs.createReadStream(pathToFile, { highWaterMark: chunkSize })

  return new Promise<string>((resolve, reject) => {
    readStream.on('data', chunk => {
      hash.update(sjcl.codec.hex.toBits(chunk.toString('hex')))
    })

    readStream.on('end', () => {
      resolve(sjcl.codec.hex.fromBits(hash.finalize()))
    })

    readStream.on('error', err => {
      reject(err)
    })
  })
}

export const getBytes32FromString = (str: string) => {
  return utils.arrayify(utils.formatBytes32String(str));
}
