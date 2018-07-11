import { HomeViewModuleModule } from './view-components/home/home-view-module/home-view-module.module';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppCustomPreloader } from './tools/load.strategies/AppCustomPreloader';

import { HomeViewModuleComponent } from './view-components/home/home-view-module/home-view-module.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: '/home'  },
  //{path: 'home', loadChildren: './view-components/home/home-view-module/home-view-module.module'  },
  {path: 'home', component: HomeViewModuleComponent  },
];

//export const App.routingRoutes = RouterModule.forChild(routes);

@NgModule({
  imports:[
    HomeViewModuleModule,
    RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
  exports:[RouterModule],
  providers: [AppCustomPreloader]
})

export class AppRoutingModule {}
