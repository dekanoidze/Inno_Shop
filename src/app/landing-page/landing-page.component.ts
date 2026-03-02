import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  categories = [
    { icon: '👗', name: 'Fashion', count: 1240 },
    { icon: '💻', name: 'Electronics', count: 830 },
    { icon: '🏠', name: 'Home & Living', count: 640 },
    { icon: '⚽', name: 'Sports', count: 420 },
    { icon: '💄', name: 'Beauty', count: 310 },
    { icon: '📚', name: 'Books', count: 980 },
  ];

  products = [
    {
      emoji: '👟',
      name: 'Air Runner Pro',
      category: 'Fashion',
      price: '89.99',
      badge: 'New',
    },
    {
      emoji: '🎧',
      name: 'SoundWave X3',
      category: 'Electronics',
      price: '129.99',
      badge: 'Hot',
    },
    {
      emoji: '🪴',
      name: 'Zen Desk Plant',
      category: 'Home',
      price: '24.99',
      badge: null,
    },
    {
      emoji: '⌚',
      name: 'SmartWatch Lite',
      category: 'Electronics',
      price: '199.99',
      badge: 'Sale',
    },
    {
      emoji: '👜',
      name: 'Urban Tote Bag',
      category: 'Fashion',
      price: '49.99',
      badge: null,
    },
    {
      emoji: '📖',
      name: 'Design Thinking',
      category: 'Books',
      price: '19.99',
      badge: null,
    },
  ];
}
