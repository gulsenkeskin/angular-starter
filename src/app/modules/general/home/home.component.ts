import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;
  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: object) {
    this.features =
      [
        {
          name: 'Items',
          description: 'Items',
          icon: 'fab fa-bootstrap',
          link: 'httpclient'
        },

      ];

  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

    this.titleService.setTitle('angular.gulsen: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'angular.gulsen',
      content: 'Gülsen'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 13.1.1 et bootstrap 5.1.3' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });

  }

}
