import {ossLocalConf} from '../config/oss'
const OSS = require('ali-oss')

export async function getOss() {
    return  new OSS(ossLocalConf);
}

export async function uploadBlog(file: any) {
    const client = await getOss()
    return client.put(file.name, file) 
}