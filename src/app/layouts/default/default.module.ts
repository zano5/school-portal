import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatTableModule, MatStepperModule, MatButtonModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatIconModule, } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNewCourseComponent } from 'src/app/modules/add-new-course/add-new-course.component';
import { CoursesComponent } from 'src/app/modules/courses/courses.component';
import { TrainersComponent } from 'src/app/modules/trainers/trainers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { AddCourseContentComponent } from 'src/app/modules/add-course-content/add-course-content.component';

import { ApplicationsComponent } from 'src/app/modules/applications/applications.component';
import { AddUserComponent } from 'src/app/modules/add-user/add-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialog/delete-dialog/delete-dialog.component';
import { StudentFormComponent } from 'src/app/modules/forms/student-form/student-form.component';
import { TurtorFormComponent } from 'src/app/modules/forms/turtor-form/turtor-form.component';
import { AdminFormComponent } from 'src/app/modules/forms/admin-form/admin-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateTurtorComponent } from 'src/app/dialog/update-turtor/update-turtor.component';
import { ApplicantComponent } from 'src/app/dialog/applicant/applicant.component';
import { OpenFileComponent } from 'src/app/dialog/open-file/open-file.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

import { EditCourseComponent } from 'src/app/modules/edit-course/edit-course.component';
import {MatListModule} from '@angular/material/list';
import { DeleteCourseComponent } from 'src/app/dialog/delete-course/delete-course.component';
import { CanActivateRouteGuard } from 'src/app/can-activate-route.guard';
import { AuthService } from 'src/app/backend/auth.service';
import { AlertComponent } from 'src/app/modules/alert/alert.component';
import { PostNewsComponent } from 'src/app/dialog/post-news/post-news.component';


import { PdfJsViewerModule } from 'ng2-pdfjs-viewer'; 

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    StudentFormComponent,
    AddNewCourseComponent,
    CoursesComponent,
    TrainersComponent,
    AddCourseContentComponent,
    ApplicationsComponent,
    AddUserComponent,
    TurtorFormComponent,
    AdminFormComponent,
    EditCourseComponent,
    AlertComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatIconModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    PdfViewerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatListModule,
    MatTabsModule,
    MatAutocompleteModule,
    PdfJsViewerModule,
    HttpClientModule
    
  ],
  providers: [AuthService ,CanActivateRouteGuard],
  entryComponents: [DeleteDialogComponent, UpdateTurtorComponent,
     ApplicantComponent, OpenFileComponent, DeleteCourseComponent,AlertComponent,
    PostNewsComponent]
})
export class DefaultModule { }
