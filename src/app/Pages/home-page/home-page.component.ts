import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { HomeComponent } from '../../Sections/home-search/home.component';
import { ServiceCapabilitiesComponent } from '../../Sections/service-capabilities/service-capabilities.component';
import { FindTelegramComponent } from '../../Sections/find-telegram/find-telegram.component';
import { BuyingAdsComponent } from '../../Sections/buying-ads/buying-ads.component';
import { DetailedAnalyticsComponent } from '../../Sections/detailed-analytics/detailed-analytics.component';
import { VerifyChannelsComponent } from '../../Sections/verify-channels/verify-channels.component';
import { LeverageDataGramComponent } from '../../Sections/leverage-data-gram/leverage-data-gram.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, 
    HomeComponent, 
    ServiceCapabilitiesComponent, 
    FindTelegramComponent, 
    BuyingAdsComponent,
    DetailedAnalyticsComponent,
    VerifyChannelsComponent,
    LeverageDataGramComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
