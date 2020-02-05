import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DocsComponent } from './docs/docs.component';
import { DocspageComponent } from './docspage/docspage.component';
import { ComponentComponent } from './component/component.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { FaqsComponent } from './faqs/faqs.component';
import { Page404Component } from './page404/page404.component';
import { PhotosComponent } from './photos/photos.component';
import { HowwqeworkComponent } from './howwqework/howwqework.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeaserComponent } from './teaser/teaser.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { HowdoesworkComponent } from './howdoeswork/howdoeswork.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './pages/design/design.component';
import { WebappsComponent } from './pages/webapps/webapps.component';
import { TechmanagerComponent } from './pages/jobs/techmanager/techmanager.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { SeoComponent } from './pages/seo/seo.component';
import { ApisComponent } from './pages/apis/apis.component';
import { AppdevComponent } from './pages/jobs/appdev/appdev.component';
import { DesigndevComponent } from './pages/jobs/designdev/designdev.component';
import { JuniordevComponent } from './pages/jobs/juniordev/juniordev.component';
import { FullstackdevComponent } from './pages/jobs/fullstackdev/fullstackdev.component';
import { ContactpComponent } from './pages/contactp/contactp.component';
import { DocspComponent } from './pages/docsp/docsp.component';
import { FeaturespComponent } from './pages/featuresp/featuresp.component';
import { AboutpComponent } from './pages/aboutp/aboutp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DocsComponent,
    DocspageComponent,
    ComponentComponent,
    PricingComponent,
    FeaturesComponent,
    FaqsComponent,
    Page404Component,
    PhotosComponent,
    HowwqeworkComponent,
    HeaderComponent,
    FooterComponent,
    TeaserComponent,
    IntegrationsComponent,
    HowdoesworkComponent,
    ContactComponent,
    DesignComponent,
    WebappsComponent,
    TechmanagerComponent,
    CustomizeComponent,
    SeoComponent,
    ApisComponent,
    AppdevComponent,
    DesigndevComponent,
    JuniordevComponent,
    FullstackdevComponent,
    ContactpComponent,
    DocspComponent,
    FeaturespComponent,
    AboutpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
