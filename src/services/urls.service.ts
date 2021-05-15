import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateUrlDto } from '@dtos/urls.dto';
import HttpException from '@exceptions/HttpException';
import { Url } from '@interfaces/urls.interface';
import { isEmpty } from '@utils/util';
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();

class UrlService {
  public urls = DB.Urls;

  public async createUrl(urlData: CreateUrlDto): Promise<Url> {
    if (isEmpty(urlData)) throw new HttpException(400, "Please pass the URL");

    const createUrlData: Url = await this.urls.create({ ...urlData, uuid: uid() });
    return createUrlData;
  }
  
  public async getUrl(id): Promise<Url> {
    if (isEmpty(id)) throw new HttpException(400, "URL is not valid.");

    const findUrl: Url = await this.urls.findOne({ where: { uuid: id } });
    return findUrl;
  }
  
}

export default UrlService;
