import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppCustomPreloader } from './tools/load.strategies/AppCustomPreloader';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: '/home'  },
  {path: '/home', pathMatch: 'full',redirectTo: '/home'  },
];

//export const App.routingRoutes = RouterModule.forChild(routes);

@NgModule({
  imports:[RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
  exports:[RouterModule]
})

export class AppRoutingModule {}
