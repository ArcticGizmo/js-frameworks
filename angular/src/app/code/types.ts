import { Route } from '@angular/router';

export type CustomRoute = Route & { name?: string; icon?: string };
export type CustomRoutes = CustomRoute[];
