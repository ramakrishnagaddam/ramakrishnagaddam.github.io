import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'skills', component: SkillSetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
