import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
yearlyBilling = false;

  plans = [
    {
      name: 'Basic',
      desc: 'For individuals & small projects',
      month: 0,
      year: 0,
      features: [
        '✔ Basic cloud setup',
        '✔ Community support',
        '✔ Limited resources',
        '✖ DevOps automation',
        '✖ Advanced security'
      ],
      button: 'Get Started',
      featured: false
    },
    {
      name: 'Premium',
      desc: 'For growing startups',
      month: 49,
      year: 39,
      features: [
        '✔ Advanced cloud infrastructure',
        '✔ DevOps automation',
        '✔ Performance monitoring',
        '✔ Enhanced security',
        '✔ Priority support'
      ],
      button: 'Start Premium',
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      desc: 'For large-scale businesses',
      month: null,
      year: null,
      features: [
        '✔ Custom cloud architecture',
        '✔ Dedicated cloud expert',
        '✔ Enterprise security & compliance',
        '✔ Advanced monitoring',
        '✔ 24/7 dedicated support'
      ],
      button: 'Contact Sales',
      featured: false
    }
  ];

  toggleBilling(event: any) {
    this.yearlyBilling = event.target.checked;
  }
}
