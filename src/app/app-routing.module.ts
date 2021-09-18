import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { SectorsComponent } from './components/sectors/sectors.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'sector', component: SectorsComponent },
  { path: 'career', component: CareersComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
