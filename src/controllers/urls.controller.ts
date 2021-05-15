import { NextFunction, Request, Response } from 'express';
import { getUrlDto, CreateUrlDto } from '@dtos/urls.dto';
import { Url } from '@interfaces/urls.interface';
import urlService from '@services/urls.service';

class UrlsController {
  public urlService = new urlService();

  public createTinyUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const urlData: CreateUrlDto = req.body;
      const createUrlData: Url = await this.urlService.createUrl(urlData);
      
      let responseData = {
          newURL: `http://localhost:3000/tiny/${createUrlData.uuid}`
      }

      res.status(201).json({ data: responseData, message: 'Tiny Url Created, You can open above URL in browser to redirect.!' });
    } catch (error) {
      next(error);
    }
  };
  public getUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const getUrlData: Url = await this.urlService.getUrl(id);
      let message = '404 URL Not found.';
      let resData = null;
      if(getUrlData) {
        message = 'You requested original URL.';
        resData = getUrlData.url;
        return res.redirect(getUrlData.url);
      }

      res.status(201).json({ data: resData, message: message });
    } catch (error) {
      next(error);
    }
  };
}

export default UrlsController;
