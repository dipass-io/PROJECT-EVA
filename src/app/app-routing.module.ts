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
import { AboutpComponent } from './pages/aboutp/aboutp.component';
import { ApisComponent } from './pages/apis/apis.component';
import { ContactpComponent } from './pages/contactp/contactp.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { DocspComponent } from './pages/docsp/docsp.component';
import { FeaturespComponent } from './pages/featuresp/featuresp.component';
import { SeoComponent } from './pages/seo/seo.component';
import { AppdevComponent } from './pages/jobs/appdev/appdev.component';
import { DesigndevComponent } from './pages/jobs/designdev/designdev.component';
import { FullstackdevComponent } from './pages/jobs/fullstackdev/fullstackdev.component';
import { JuniordevComponent } from './pages/jobs/juniordev/juniordev.component';
import { TechmanagerComponent } from './pages/jobs/techmanager/techmanager.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutpComponent },
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
  { path: 'pages/about', component: AboutpComponent },
  { path: 'pages/apis', component: ApisComponent },
  { path: 'pages/contact', component: ContactpComponent },
  { path: 'pages/customize', component: CustomizeComponent },
  { path: 'pages/docs', component: DocspComponent },
  { path: 'pages/features', component: FeaturespComponent },
  { path: 'pages/seo', component: SeoComponent },
  { path: 'pages/jobs/techmanager', component: TechmanagerComponent },
  { path: 'pages/jobs/appdev', component: AppdevComponent },
  { path: 'pages/jobs/designdev', component: DesigndevComponent },
  { path: 'pages/jobs/fullstackdev', component: FullstackdevComponent },
  { path: 'pages/jobs/juniordev', component: JuniordevComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
