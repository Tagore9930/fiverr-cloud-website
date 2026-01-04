import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      title: 'Cloud Infrastructure',
      desc: 'High-performance, scalable cloud architectures designed for reliability and growth.',
      icon: 'cloud'
    },
    {
      title: 'DevOps & Automation',
      desc: 'CI/CD pipelines, automated deployments, and monitoring for faster releases.',
      icon: 'settings_suggest'
    },
    {
      title: 'Security & Compliance',
      desc: 'Best-in-class security practices to protect your data and meet compliance standards.',
      icon: 'security'
    },
  ];
}
