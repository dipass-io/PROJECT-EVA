import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComponentComponent } from './component/component.component';
import { DocsComponent } from './docs/docs.component';
import { DocspageComponent } from './docspage/docspage.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FeaturesComponent } from './features/features.component';
import { HowwqeworkComponent } from './howwqework/howwqework.component';
import { Page404Component } from './page404/page404.component';
import { PhotosComponent } from './photos/photos.component';
import { PricingComponent } from './pricing/pricing.component';
import { DesignComponent } from './pages/design/design.component';
import { ContactComponent } from './contact/contact.component';
import { WebappsComponent } from './pages/webapps/webapps.component';
import { TechmanagerComponent } from './pages/jobs/techmanager/techmanager.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'docspage', component: DocspageComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'howwqework', component: HowwqeworkComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'page404', component: Page404Component },
  { path: 'pages/design', component: DesignComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pages/webapps', component: WebappsComponent },
  { path: 'pages/jobs/techmanager', component: TechmanagerComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
