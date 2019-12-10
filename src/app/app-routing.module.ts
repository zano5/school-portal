import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AddTrainerComponent } from './modules/add-trainer/add-trainer.component';
import { TrainersComponent } from './modules/trainers/trainers.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { AddNewCourseComponent } from './modules/add-new-course/add-new-course.component';
import { AddCourseContentComponent } from './modules/add-course-content/add-course-content.component';
import { AddAdminComponent } from './modules/add-admin/add-admin.component';
import { LoginComponent } from './login/login.component';
import { ApplicationsComponent } from './modules/applications/applications.component';


const routes: Routes = [
  {path:'default', component: DefaultComponent,
children:[{
  path:'', component:DashboardComponent
},
{
  path:'posts', component:PostsComponent 
},
{ path: 'addTrainer', component: AddTrainerComponent
},
{ path: 'trainers', component: TrainersComponent
},
{ path: 'courses', component: CoursesComponent
},
{ path: 'addNewCourse', component:AddNewCourseComponent
},
{ path: 'addCourseContent', component: AddCourseContentComponent
},
{path: 'addAdmin', component:AddAdminComponent},
{path: 'applications', component:ApplicationsComponent},

]
},{path: '' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
