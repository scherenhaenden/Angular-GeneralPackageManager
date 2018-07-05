import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: '/home'  },
  {path: '/home', pathMatch: 'full',redirectTo: '/home'  },
];

//export const App.routingRoutes = RouterModule.forChild(routes);

@NgModule({
  imports:RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
})

export class AppRoutingModule {}
