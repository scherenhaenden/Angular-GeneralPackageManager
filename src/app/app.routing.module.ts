import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_ROOT } from '@angular/core/src/di/scope';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: '/home'  },
];

//export const App.routingRoutes = RouterModule.forChild(routes);

@NgModule({
  imports:RouterModule.forRoot(routes {})

})

export class AppRoutingModule {}
