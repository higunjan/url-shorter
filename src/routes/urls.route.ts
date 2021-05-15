import { Router } from 'express';
import UrlsController from '@controllers/urls.controller';
import { CreateUrlDto } from '@dtos/urls.dto';
import Route from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@middlewares/auth.middleware';

class UsersRoute implements Route {
  public path = '/tiny';
  public router = Router();
  public urlsController = new UrlsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/short-url`, authMiddleware, this.urlsController.createTinyUrl);
    this.router.get(`${this.path}/:id`, this.urlsController.getUrl);
  }
}

export default UsersRoute;
