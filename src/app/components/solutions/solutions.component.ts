import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'Startup Friendly',
      desc: 'Cost-efficient solutions tailored for early-stage and fast-growing startups.',
      icon: 'rocket_launch'
    },
    {
      title: 'Scalable by Design',
      desc: 'Our systems grow with your business without downtime or complexity.',
      icon: 'insights'
    },
    {
      title: 'Expert Support',
      desc: 'Cloud specialists 24/7 available to guide you at every stage.',
      icon: 'support_agent'
    }
  ];
}
